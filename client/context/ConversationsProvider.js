import useAuth from 'hooks/useAuth';
import { createContext, useContext, useEffect, useState } from 'react';
import useGlobal from './GlobalProvider';
import useSocket from './SocketProvider';

const ConversationsContext = createContext();

export default function useConversations() {
  return useContext(ConversationsContext);
}

export function ConversationsProvider({ children }) {
  const socket = useSocket();
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState([]);
  const { user } = useAuth();
  const { openNotification } = useGlobal();
  const selectedRoom = rooms[selectedRoomIndex];

  useEffect(() => {
    if (!selectedRoom || !socket) return;
    socket.emit('render-messages-request', {
      roomId: selectedRoom._id,
    });

    joinRoom({ roomId: selectedRoom._id });
  }, [selectedRoom, socket]);

  useEffect(() => {
    if (socket == null) return;

    socket.emit('send-rooms');

    socket.on('get-rooms', ({ rooms }) => {
      setRooms(rooms);
    });

    socket.on('render-messages-response', ({ messages }) => {
      setMessages(messages);
    });

    return () => {
      socket.off('get-rooms');
      socket.off('render-messages-response');
    };
  }, [socket]);

  useEffect(() => {
    if (!socket) return;

    socket.on('receive-message', ({ message, roomId }) => {
      if (selectedRoom._id === roomId) {
        setMessages(prevMessages => [...prevMessages, message]);
      }

      openNotification(`${message?.from.displayName} messaged you!`);
    });

    return () => {
      socket.off('receive-message');
    };
  }, [socket, rooms, selectedRoom]);

  function joinRoom({ roomId, secondUser, isAnonymous }) {
    socket.emit('join', {
      users: [user._id, secondUser],
      isAnonymous,
      roomId,
    });

    if (!roomId) {
      socket.emit('send-rooms');
      openNotification(`Joined a new room`);
    }
  }

  function sendMessage(text) {
    socket.emit('send-message', { text, roomId: selectedRoom._id });
  }

  const value = {
    rooms,
    selectedRoom,
    setSelectedRoomIndex,
    selectedRoomIndex,
    joinRoom,
    sendMessage,
    messages,
  };

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  );
}
