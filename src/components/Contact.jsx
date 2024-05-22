"use client";
import React from 'react'
import styles from '../styles/contact.module.css';
import FluidAnimation from './FluidAnimation';
import Particules from './Particules';

const Contact = () => {
  return (
    <>
     
  
      <div className={styles.maxContainer}>
        <div className={styles.header}>
          <div className={styles.dotsContainer}>
            <div className={styles.dotred}></div>
            <div className={styles.dotyellow}></div>
            <div className={styles.dotgreen}></div>
          </div>
        </div>
        <div className={styles.windowsContent}>
          <div className={styles.windowsWrapper}>
            <h3 className={styles.mainText}>Irving Acosta</h3>
            <p className={styles.subText}>These are the ways you can contact me:</p>
            <div className={styles.windowsItems}>
              <div className={styles.item}>
                <label>Secondary email address:</label>
                <p>mor22781@uvg.edu.gt</p>
              </div>
              <div className={styles.item}>
                <label>Cell number:</label>
                <p>+502 3753-3940</p>
              </div>
              <div className={styles.item}>
                <label>Address:</label>
                <p>Guatemala, Guatemala. Z15</p>
              </div>
            </div>
          </div>
          <div className={styles.fluidAnimation}>
        <FluidAnimation />
      </div>
        </div>
            <div className={styles.particleCont}>
            <Particules color="#3C4048" />
            </div>
      </div>
    </>
  )
}

export default Contact;
