// Cat.jsx
import React from 'react';
import styles from '../styles/cat.module.css';

const Cat = () => {
  return (
    <div className={styles.cat}>
      <div className={`${styles.ear} ${styles['ear--left']}`}></div>
      <div className={`${styles.ear} ${styles['ear--right']}`}></div>
      <div className={styles.face}>
        <div className={`${styles.eye} ${styles['eye--left']}`}>
          <div className={styles['eye-pupil']}></div>
        </div>
        <div className={`${styles.eye} ${styles['eye--right']}`}>
          <div className={styles['eye-pupil']}></div>
        </div>
        <div className={styles.muzzle}></div>
      </div>
    </div>
  );
};

export default Cat;
