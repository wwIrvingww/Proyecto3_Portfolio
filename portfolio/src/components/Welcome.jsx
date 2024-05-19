// components/Welcome.jsx
import Link from 'next/link';
import React from 'react';
import styles from '../styles/welcome.module.css';
import Cat from './Cat';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Welcome = () => {
  return (
    <>
      <div id="welcome-container" className={styles.container}>
        <h1 className={styles.title}>I'm Irving</h1>
        <p className={styles.description}>
          Hello! I'm a web developer with a passion for creating sleek and efficient user interfaces. I love working with
          modern web technologies and continuously learning new things to improve my skills.
        </p>
        <Link href="/home">
          <button className={styles.button}>Get Started</button>
        </Link>
      </div>
      <div className={styles.cat}>
        <Cat />
      </div>
    </>
  );
};

export default Welcome;
