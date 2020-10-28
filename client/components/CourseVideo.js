import { Box, Divider, NoSsr, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Reply from '@material-ui/icons/Reply';
import { DateTime } from 'luxon';
import { useState } from 'react';
import ShareModal from './ShareModal';

const useStyles = makeStyles(theme => ({
  boxLeft: {
    width: '70%',
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(3),
      paddingRight: theme.spacing(3),
      marginLeft: theme.spacing(3),
    },
    [theme.breakpoints.down('md')]: {
      width: '65%',
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
      marginLeft: 0,
      width: '90%',
    },
  },
  video: {
    maxWidth: '100%',
    height: 'auto',
  },
  info: {
    padding: '1rem 0',
  },
}));

export default function CourseVideo({ course, isSmall }) {
  const classes = useStyles();
  const [shareOpen, setShareOpen] = useState(false);

  return (
    <Box className={classes.boxLeft}>
      {isSmall && <Toolbar />}
      <video controls className={classes.video}>
        <source src={course.videoUrl} type='video/mp4' />
      </video>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        className={classes.info}
      >
        <div>
          <Typography variant='h5' component='h3' gutterBottom>
            {course.title}
          </Typography>
          <Typography variant='body2' component='p' color='textSecondary'>
            {DateTime.fromISO(course.createdAt).toFormat('DDD')}
          </Typography>
        </div>
        <Box
          alignSelf='flex-end'
          color='textSecondary'
          display='flex'
          alignItems='center'
          style={{ cursor: 'pointer' }}
        >
          <Box marginRight='0.5rem'>
            <Reply />
          </Box>
          <Typography
            variant='subtitle1'
            component='p'
            onClick={() => setShareOpen(true)}
          >
            SHARE
          </Typography>
          <NoSsr>
            <ShareModal
              open={shareOpen}
              handleClose={() => setShareOpen(false)}
              url={typeof window !== 'undefined' && window.location.href}
            />
          </NoSsr>
        </Box>
      </Box>
      <Divider />
      <Box margin='1rem 0'>
        <Typography variant='body1' component='p'>
          {course.description}
        </Typography>
      </Box>
      {!isSmall && <Toolbar />}
    </Box>
  );
}
