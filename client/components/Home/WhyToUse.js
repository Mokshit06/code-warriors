import styles from 'styles/Home.module.css';

const benefits = [
  {
    image: '/icons/teams.png',
    title: 'Teams',
    benefits: [
      'Chat from anywhere',
      'Meet from anywhere',
      'Call from anywhere',
      'Collaborate from anywhere',
    ],
  },
  {
    image: '/icons/teams.png',
    title: 'Teams',
    benefits: [
      'Chat from anywhere',
      'Meet from anywhere',
      'Call from anywhere',
      'Collaborate from anywhere',
    ],
  },
  {
    image: '/icons/teams.png',
    title: 'Teams',
    benefits: [
      'Chat from anywhere',
      'Meet from anywhere',
      'Call from anywhere',
      'Collaborate from anywhere',
    ],
  },
];

function Benefit({ benefit }) {
  return (
    <div className={styles.benefitItem} data-aos='fade-up'>
      {benefit.image && (
        <div className={styles.imgArea}>
          <img src={benefit.image} alt='' />
        </div>
      )}
      <h2>{benefit.title}</h2>
      <ul>
        {benefit.benefits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function WhyToUse() {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefitsContent}>
        <h2 className={styles.smHeader}>Why should you use it?</h2>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <Benefit benefit={benefit} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
