import styles from 'styles/Home.module.css';

const features = [
  {
    title: 'Spread awareness',
    body:
      'The students lack the maturity & analytical thinking required to handle the vulnerabilities and hence are at high risk of falling prey to bullies or become a bully themselves. Hence, it is extremely necessary we sensitise and guide them to create a healthy & meaningful internet presence.',
    image: '/awareness.png',
  },
  {
    title: 'Student Counselling',
    body:
      'Bullying can have a significant impact on a child’s self-esteem. Bullying often targets an aspect of someone’s life, for example, your appearance or a disability. This can be really damaging to how young people feel about themselves. It’s important that when cyberbullying happens that you work to support your child and ensure their wellbeing is not adversely affected.',
    image: '/counselling.jpg',
  },
  {
    title: 'Courses and videos',
    body:
      'We regularly release educational videos on each category related to bullying and the students are encouraged to watch them to stay up to date and be aware. They can share the videos and get other recommendations',
    image: '/courses.png',
  },
  {
    title: 'Reporing Bullies',
    body:
      'Students who feel like they are being bullied can either contact a teacher through our platform with their name or anonymously or they can report the student who they are being bullied by and investigation on that topic will be done.',
    image: '/report.jpg',
  },
  {
    title: 'Admin Panel',
    body:
      'We provide an admin panel to all the schools that join us in this movement. From that panel, the school can get the analytics of their school and the amount of cases reported.',
    image: '/admin-panel.jpg',
  },
];

export default function Features() {
  return (
    <section className={styles.apps} id='about'>
      <div className={styles.appsContent}>
        <h2 className={styles.smHeader} data-aos='fade-down'>
          What we do?
        </h2>
        <div className={styles.appArea}>
          {features.map((feature, index) => (
            <div className={styles.app} key={index}>
              <div
                className={styles.img}
                data-aos='fade-up-right'
                style={{ backgroundImage: `url(${feature.image})` }}
              />
              <div className={styles.appInfo}>
                <h2>{feature.title}</h2>
                <p>{feature.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
