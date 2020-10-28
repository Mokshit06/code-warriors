import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Layout from 'components/Layout';
import useAuth from 'hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (Component, admin = false) => props => {
  const { user, error } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!admin) {
      if (!error && user) {
        router.push(router.asPath);
      } else {
        router.replace('/');
      }
    } else {
      if (!error && user?.isAdmin) {
        router.push(router.asPath);
      } else {
        router.replace('/');
      }
    }
  }, [user, admin, error]);

  if (!user) {
    return (
      <Layout flex>
        <Box
          height='100%'
          width='100%'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <CircularProgress />
        </Box>
      </Layout>
    );
  }

  return <Component {...props} />;
};

export default withAuth;
