import { Box, Typography } from '@material-ui/core';
import { DateTime } from 'luxon';
import Link from 'next/link';

export default function RecommendedCard({ course }) {
  const { videoUrl } = course;
  const imageUrl = videoUrl.substr(0, videoUrl.lastIndexOf('.')) + '.jpg';

  return (
    <Link href={`/courses/${course._id}`}>
      <a>
        <Box width='100%' mb={2} display='flex'>
          <img
            style={{ width: '44%', height: 110, marginRight: '10px' }}
            alt={course.title}
            src={imageUrl}
          />
          <Box
            pr={2}
            width='56%'
            display='flex'
            flexDirection='column'
            alignItems='space-around'
          >
            <div>
              <Typography gutterBottom variant='h6'>
                {course.title}
              </Typography>
              <Typography gutterBottom variant='body2'>
                {course.description.slice(0, 40) + '...'}
              </Typography>
            </div>
            <Typography variant='subtitle2' color='textSecondary'>
              {DateTime.fromISO(course.createdAt).toFormat('DDD')}
            </Typography>
          </Box>
        </Box>
      </a>
    </Link>
  );
}
