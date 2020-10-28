import { Box, Divider, Grid, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RecommendedCard from 'components/RecommendedCard';

const useStyles = makeStyles(theme => ({
  boxRight: {
    width: '30%',
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.down('md')]: {
      width: '35%',
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
      width: '90%',
    },
  },
  recommended: {
    margin: '0.5rem 0 1rem',
  },
}));

export default function Recommendations({ courses, isSmall }) {
  const classes = useStyles();

  return (
    <Box className={classes.boxRight}>
      {isSmall ? <Divider /> : <Toolbar />}
      <Typography variant='h5' component='p' className={classes.recommended}>
        Recommended
      </Typography>
      <Grid container>
        {courses?.map(course => (
          <Grid item key={course._id}>
            <RecommendedCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
