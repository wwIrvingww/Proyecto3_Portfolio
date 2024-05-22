import Link from 'next/link';
import React from 'react';
import styles from '../styles/welcome.module.css';
import Cat from './Cat';
import FluidAnimation from './FluidAnimation';


const Welcome = () => {
  return (
    <>
      <div id="welcome-container" className={styles.container}>
    
         <h1 className={styles.title}>I&apos;m Irving</h1>
        <p className={styles.description}>
          Hello! I&apos;m 19 years old. I&apos;m in my third year of Computer Science at Universidad del Valle de Guatemala.
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
      <div className={styles.fluidAnimation}>
        <FluidAnimation />
      </div>
    </>
  );
};

export default Welcome;
