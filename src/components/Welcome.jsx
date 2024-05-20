import Link from 'next/link';
import React from 'react';
import styles from '../styles/welcome.module.css';
import Cat from './Cat';


const Welcome = () => {
  return (
    <>
      <div id="welcome-container" className={styles.container}>
        <h1 className={styles.title}>I'm Irving</h1>
        <p className={styles.description}>
          Hello! I'm 19 years old. I'm in my third year of Computer Science at Universidad del Valle de Guatemala.
          I like coffee, programming, and cats. I practiced swimming for 10 years, and I love to listen  Lana del Rey while I code.{
            
          }
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
