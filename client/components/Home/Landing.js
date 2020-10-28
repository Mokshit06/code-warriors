import { Box, Button } from '@material-ui/core';
import styles from 'styles/Home.module.css';

export default function Landing() {
  return (
    <Box
      height='calc(100vh - 64px)'
      display='flex'
      alignItems='center'
      width='80%'
      margin='0 auto'
      component='section'
    >
      <img src='/triangle.svg' alt='' className={styles.triangle} />
      <div className={styles.homeContent}>
        <div className={styles.desc} data-aos='fade-right'>
          <h1>BullyShoo</h1>
          <p>
            BullyShoo is an anti-bullying organisation with the aim to help and
            provide guidance and counselling to victims of bullying happening in
            Schools and colleges. We are here to help you.
          </p>
          <Button href='#about' color='primary' variant='contained'>
            Learn more
          </Button>
        </div>
        <div className={styles.coverImage} data-aos='fade-left'></div>
      </div>
    </Box>
  );
}
