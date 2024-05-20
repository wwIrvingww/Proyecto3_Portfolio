import React from 'react';
import styles from '../styles/aboutme.module.css';
import Skills from './Skills';

const AboutMe = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imageSection}>
            <img src="https://i.pinimg.com/originals/a3/16/54/a31654e050312ef839b26d32228da541.jpg" alt="Profile" />
          </div>
          <div className={styles.infoSection}>
            <h2>About me</h2>
            <p>
              I like programming, and I&apos;m always looking for new challenges to learn from. I&apos;m a frontend developer with experience in React and Node.js. I&apos;m also familiar with Python and Java.
            </p>
            <p>
              I&apos;m studying Computer Science at Universidad del Valle de Guatemala. I started programming when I was 15 years old, and I&apos;ve been hooked ever since. I love the feeling of solving a problem and seeing the results of my work come to life.
            </p>
            <p>
              Fast forward to today, and here I am, still learning something new every day as I look for new challenges to grow in knowledge and experience.
            </p>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default AboutMe;
