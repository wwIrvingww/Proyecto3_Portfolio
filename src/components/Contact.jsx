"use client";
import React from 'react';
import styles from '../styles/contact.module.css';
import FluidAnimation from './FluidAnimation';
import Particules from './Particules';

const Contact = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }, () => {
      alert('Failed to copy!');
    });
  };

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
                <p onClick={() => copyToClipboard('mor22781@uvg.edu.gt')} style={{ cursor: 'pointer' }}>mor22781@uvg.edu.gt</p>
              </div>
              <div className={styles.item}>
                <label>Cell number:</label>
                <p onClick={() => copyToClipboard('+502 3753-3940')} style={{ cursor: 'pointer' }}>+502 3753-3940</p>
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
  );
};

export default Contact;
