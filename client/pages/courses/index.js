import Layout from 'components/Layout';
import useCourses from 'hooks/useCourses';
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Grid,
  CardContent,
  Container,
  Chip,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Head from 'next/head';

const useStyles = makeStyles(theme => ({
  card: {
    width: '100%',
  },
  head: {
    marginTop: '2.5rem',
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

export default function CoursePage() {
  const { courses } = useCourses();
  const classes = useStyles();

  if (!courses) {
    return 'Loading...';
  }

  return (
    <Layout>
      <Head>
        <title key='title'>Courses | BullyShoo</title>
      </Head>
      <Container>
        <Typography variant='h2' gutterBottom className={classes.head}>
          Courses
        </Typography>
        <Grid container spacing={2}>
          {courses.map(course => {
            const { videoUrl } = course;
            const imageUrl =
              videoUrl.substr(0, videoUrl.lastIndexOf('.')) + '.jpg';

            return (
              <Link key={course._id} href={`/courses/${course._id}`} passHref>
                <Grid item md={4} sm={6}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        component='img'
                        alt={course.title}
                        title={course.title}
                        height={180}
                        image={imageUrl}
                      />
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                          {course.title}
                        </Typography>
                        <Typography
                          variant='body2'
                          color='textSecondary'
                          component='p'
                        >
                          {course.description.slice(0, 100) + '...'}
                        </Typography>
                        <Box m='0.8rem 0 0.2rem'>
                          <Chip label={course.category} />
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </Link>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
}
