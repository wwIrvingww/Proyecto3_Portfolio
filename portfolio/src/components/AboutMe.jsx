import React from 'react';
import styles from '../styles/aboutme.module.css';
import Skills from './Skills';

const AboutMe = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imageSection}>
            <img src="https://i.pinimg.com/736x/b7/c3/0a/b7c30a6a3d32ac6e4c38791b20780822.jpg" alt="Profile" />
          </div>
          <div className={styles.infoSection}>
            <h2>About me</h2>
            <p>
              My love for technology started at a young age when I got my first computer. I always wondered how it worked inside, which prompted my unstoppable desire to feed myself with information about each of its components.
            </p>
            <p>
              I graduated from a computer science institution in my native Dominican Republic in 2015. I remember my first calculator program on PSeInt in 2013. When I ran it, I really felt like I had superpowers.
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
