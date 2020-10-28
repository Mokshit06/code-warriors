import styles from 'styles/Home.module.css';
import { Typography } from '@material-ui/core';

export default function AboutUs() {
  return (
    <section className={styles.software}>
      <div className={styles.softwareContent}>
        <h2 className={styles.smHeader}>About us</h2>
        <p>
          We at BullyShoo are here to help and guide you to report cases of
          bullying in Schools. If you suspect that the incident has taken place,
          you can talk to a teacher or counsellor on our platform. You must also
          keep your parents informed at every stage. Kindly note that we are
          neither a law enforcement agency nor a government body. We are here
          simply to help you fight the menace of cyberbullying. All the details
          you submit will strictly be kept confidential. We will try our best to
          make schools a safe place for all students.
        </p>
      </div>
    </section>
  );
}
