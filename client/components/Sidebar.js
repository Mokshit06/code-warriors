import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Hidden,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useConversations from 'context/ConversationsProvider';
import useGlobal from 'context/GlobalProvider';
import useAuth from 'hooks/useAuth';
import { useState } from 'react';
import Link from 'next/link';
import ConversationModal from './ConversationModal';

const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexShrink: 0,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  create: {
    width: '100%',
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    margin: theme.spacing(2.7),
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  activeList: {
    background: theme.palette.grey[700],
  },
  divider: {
    width: '100%',
  },
}));

const container =
  typeof window !== 'undefined' ? () => window.document.body : undefined;

export default function Sidebar({ navbar }) {
  const {
    selectedRoomIndex,
    rooms,
    setSelectedRoomIndex,
  } = useConversations() || { rooms: [] };
  const { mobileOpen, handleDrawerToggle } = useGlobal();
  const classes = useStyles();
  const { user, isAuthenticated, logout, login } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  if (!rooms) {
    return 'Loading...';
  }

  const InnerDrawer = !navbar ? (
    <>
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {rooms.map((room, index) => {
            const recipient = room.users.filter(u => u._id !== user._id)[0];
            const isSelected = selectedRoomIndex === index;

            return (
              recipient && (
                <ListItem
                  className={isSelected ? classes.activeList : null}
                  button
                  key={room._id}
                  onClick={() => setSelectedRoomIndex(index)}
                >
                  <ListItemIcon>
                    <Avatar src={recipient?.image} />
                  </ListItemIcon>
                  <ListItemText primary={recipient?.displayName} />
                </ListItem>
              )
            );
          })}
        </List>
        <div className={classes.create}>
          <Divider className={classes.divider} />
          <Button
            variant='contained'
            color='primary'
            type='submit'
            size='large'
            className={classes.button}
            onClick={handleClickOpen}
            startIcon={<Icon>playlist_add</Icon>}
          >
            Talk to Someone
          </Button>
          <ConversationModal open={modalOpen} setOpen={setModalOpen} />
        </div>
      </div>
    </>
  ) : (
    <>
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {isAuthenticated ? (
            <>
              <ListItem button>
                <Link href='/courses' passHref>
                  <Button color='inherit'>Courses</Button>
                </Link>
              </ListItem>
              <ListItem button>
                <Link href='/talk'>
                  <a>
                    <Button color='inherit'>Chat</Button>
                  </a>
                </Link>
              </ListItem>
              <ListItem button>
                <Link href='https://mokshitjain01.typeform.com/to/GyKOKiaK'>
                  <a>
                    <Button color='inherit'>Report Someone</Button>
                  </a>
                </Link>
              </ListItem>
              {user.isAdmin && (
                <ListItem button>
                  <Link href='/admin'>
                    <a>
                      <Button color='inherit'>Admin</Button>
                    </a>
                  </Link>
                </ListItem>
              )}
              <ListItem button>
                <Button color='inherit' onClick={logout}>
                  Logout
                </Button>
              </ListItem>
            </>
          ) : (
            <ListItem button>
              <Button color='inherit' onClick={login}>
                Login
              </Button>
            </ListItem>
          )}
        </List>
      </div>
    </>
  );

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation='js'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {InnerDrawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation='js'>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant='permanent'
          open
        >
          {InnerDrawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}
