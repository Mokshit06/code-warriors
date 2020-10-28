import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Button,
  Typography,
  Toolbar,
  AppBar,
  Hidden,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useAuth from 'hooks/useAuth';
import useGlobal from 'context/GlobalProvider';
import Link from 'next/link';
import Sidebar from './Sidebar';

const useStyles = makeStyles(theme => ({
  appBar: {
    flexGrow: 1,
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
}));

export default function Navbar() {
  const classes = useStyles();
  const { login, logout, isAuthenticated, user } = useAuth();
  const { handleDrawerToggle } = useGlobal();

  const AuthenticatedNavbar = (
    <>
      <Link href='/courses' passHref>
        <Button color='inherit'>Courses</Button>
      </Link>
      <Link href='/talk'>
        <a>
          <Button color='inherit'>Chat</Button>
        </a>
      </Link>
      <Link href='https://mokshitjain01.typeform.com/to/GyKOKiaK'>
        <a>
          <Button color='inherit'>Report Someone</Button>
        </a>
      </Link>
      {user?.isAdmin && (
        <Link href='/admin'>
          <a>
            <Button color='inherit'>Admin</Button>
          </a>
        </Link>
      )}
      <Button color='inherit' onClick={logout}>
        Logout
      </Button>
    </>
  );

  return (
    <>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Link href='/'>
            <a className={classes.title}>
              <Typography variant='h6'>BullyShoo</Typography>
            </a>
          </Link>
          <Hidden smUp implementation='js'>
            <Sidebar navbar />
          </Hidden>
          <Hidden xsDown implementation='js'>
            {isAuthenticated ? (
              AuthenticatedNavbar
            ) : (
              <Button color='inherit' onClick={login}>
                Login
              </Button>
            )}
          </Hidden>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
}
