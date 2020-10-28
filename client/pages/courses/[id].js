import { CircularProgress, useMediaQuery, useTheme } from '@material-ui/core';
import CourseVideo from 'components/CourseVideo';
import Layout from 'components/Layout';
import Recommendations from 'components/Recommendations';
import useCourses from 'hooks/useCourses';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import ErrorPage from 'next/error';
import Head from 'next/head';

export default function SingleCoursePage() {
  const { query } = useRouter();

  const { courses: course } = useCourses(query.id);
  const { courses } = useCourses();

  const filteredCourses = useMemo(() => {
    return courses?.filter(c => c._id !== course?._id);
  }, [courses, course]);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  if (!course) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout flex flexColumn={isSmall}>
      {!courses ? (
        <CircularProgress />
      ) : (
        <>
          <Head>
            <title key='title'>{course?.title} | BullyShoo</title>
          </Head>
          <CourseVideo isSmall={isSmall} course={course} />
          <Recommendations isSmall={isSmall} courses={filteredCourses} />
        </>
      )}
    </Layout>
  );
}
