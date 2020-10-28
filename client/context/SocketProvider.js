import useAuth from 'hooks/useAuth';
import { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext();

export default function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState();
  const { user } = useAuth();
  const socketURL = process.env.NEXT_PUBLIC_API_URL || '';

  useEffect(() => {
    const newSocket = io(socketURL, { query: { id: user?._id } });
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, [user]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
