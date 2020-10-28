import withAuth from 'components/withAuth';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import AdminTable from 'components/AdminTable';
import { Toolbar } from '@material-ui/core';
import Layout from 'components/Layout';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '3rem',
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <Layout>
      <Container className={classes.container}>
        <Typography align='center' variant='h3' gutterBottom>
          Admin Panel
        </Typography>
        <AdminTable />
        <AdminTable teachers />
      </Container>
    </Layout>
  );
}

export default withAuth(Dashboard, true);
