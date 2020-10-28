// import useConversation from 'hooks/useConversation';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Conversation from 'components/Conversation';
import Sidebar from 'components/SideBar';
import withAuth from 'components/withAuth';
import useConversations from 'context/ConversationsProvider';
import { SocketProvider } from 'context/SocketProvider';
import { ConversationsProvider } from 'context/ConversationsProvider';
import Layout from 'components/Layout';

function ChatRoom() {
  const { selectedRoom } = useConversations();

  return (
    <Layout flex noFooter>
      <Sidebar />
      {selectedRoom ? (
        <Conversation />
      ) : (
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          position='fixed'
          bottom={0}
          top={0}
          left={240}
          right={0}
        >
          <Typography variant='h2' color='textSecondary'>
            No Room selected
          </Typography>
        </Box>
      )}
    </Layout>
  );
}

function ChatPage() {
  return (
    <SocketProvider>
      <ConversationsProvider>
        <ChatRoom />
      </ConversationsProvider>
    </SocketProvider>
  );
}

export default withAuth(ChatPage);
