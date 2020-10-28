import { makeStyles } from '@material-ui/core/styles';
import { useState, useRef, useEffect } from 'react';
import useInput from 'hooks/useInput';
import Message from 'components/Message';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import useConversations from 'context/ConversationsProvider';
import { Toolbar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: '0.5rem 1.5rem',
    // paddingTop: theme.spacing(1),
    // paddingBottom: theme.spacing(1),
  },
  text: {
    flex: 1,
  },
  form: {
    padding: '1.5rem',
    [theme.breakpoints.up('sm')]: {
      padding: '1rem 3rem',
    },
    background: theme.palette.grey[800],
    marginTop: 'auto',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
}));

export default function Conversation({ room }) {
  const classes = useStyles();
  const [hasError, setHasError] = useState(false);
  const { messages, sendMessage } = useConversations();
  const scrollDownRef = useRef();
  const { input: message, setValue: setMessage } = useInput('');

  useEffect(() => {
    setMessage('');
    scrollDownRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [room]);

  useEffect(() => {
    scrollDownRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    if (!message.value.trim()) {
      setHasError(true);
      return;
    }

    sendMessage(message.value);
    setHasError(false);
    setMessage('');
    scrollDownRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (!messages) return 'Loading...';

  return (
    <Box position='relative' className={classes.wrapper}>
      <div style={{ overflow: 'auto' }}>
        <Toolbar />
        <Box>
          {messages.map(message => (
            <Message key={message._id} {...message} />
          ))}
          <div ref={scrollDownRef} />
        </Box>
      </div>
      <Box
        onSubmit={handleSubmit}
        component='form'
        display='flex'
        className={classes.form}
      >
        <TextField
          label='Type something...'
          {...message}
          className={classes.text}
          error={hasError}
          helperText='Message is required'
        />
        <Button
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          className={classes.button}
          endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
