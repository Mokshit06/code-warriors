import { makeStyles } from '@material-ui/core';
import useAuth from 'hooks/useAuth';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { DateTime } from 'luxon';

const useStyles = makeStyles(theme => ({
  card: {
    padding: '10px',
  },
  message: {
    wordBreak: 'break-word',
  },
  avatar: {
    margin: '1rem',
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

export default function Message(props) {
  const { user } = useAuth();
  const classes = useStyles();

  const { from, body, _id } = props;

  return (
    <Box
      display='flex'
      margin='0.7rem 0.5rem'
      flexDirection={from._id === user._id ? 'row-reverse' : 'row'}
    >
      <Avatar src={from.image} className={classes.avatar} />
      <Box
        maxWidth='400px'
        display='flex'
        className={classes.message}
        flexDirection='column'
        alignItems={from._id === user._id ? 'flex-end' : 'flex-start'}
      >
        <Typography variant='body2' color='textSecondary' gutterBottom>
          {from._id === user._id ? 'You' : from.displayName}
        </Typography>
        <Card variant='outlined' key={_id} className={classes.card}>
          <Typography variant='body1' component='p'>
            {body}
          </Typography>
        </Card>
      </Box>
    </Box>
  );
}
