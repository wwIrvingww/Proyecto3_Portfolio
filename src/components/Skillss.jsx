"use client";
import React, { useState, useEffect } from 'react';
import styles from '../styles/me.module.css';

const Skillss = () => {
  const [currentRow, setCurrentRow] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRow(prevRow => (prevRow % 3) + 1);
    }, 1500); // Cambia de fila cada 500 milisegundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.skillSection}>
      <h1 className={styles.heading}>skills</h1>
      <div className={styles.skillContainer}>
        <div className={`${styles.skillRow} ${currentRow === 1 ? styles.activeRow : ''}`}>
          <div className={styles.skillCard}>
            <img src="/image/html.png" className={styles.skillImg} alt="HTML" />
            <div className={styles.skillLevel}>98%</div>
            <h1 className={styles.skillName}>HTML</h1>
            <p className={styles.skillInfo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
          </div>
          <div className={styles.skillCard}>
            <img src="/image/css.png" className={styles.skillImg} alt="CSS" />
            <div className={styles.skillLevel}>95%</div>
            <h1 className={styles.skillName}>CSS</h1>
            <p className={styles.skillInfo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
          </div>
          <div className={styles.skillCard}>
            <img src="/image/js.png" className={styles.skillImg} alt="JavaScript" />
            <div className={styles.skillLevel}>90%</div>
            <h1 className={styles.skillName}>JavaScript</h1>
            <p className={styles.skillInfo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
          </div>
        </div>
        <div className={`${styles.skillRow} ${currentRow === 2 ? styles.activeRow : ''}`}>
          <div className={styles.skillCard}>
            <img src="/image/figma.png" className={styles.skillImg} alt="Figma" />
            <div className={styles.skillLevel}>85%</div>
            <h1 className={styles.skillName}>Figma</h1>
            <p className={styles.skillInfo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
          </div>
          <div className={styles.skillCard}>
            <img src="/image/react.png" className={styles.skillImg} alt="React" />
            <div className={styles.skillLevel}>80%</div>
            <h1 className={styles.skillName}>React</h1>
            <p className={styles.skillInfo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
          </div>
          <div className={styles.skillCard}>
            <img src="/image/python.png" className={styles.skillImg} alt="Python" />
            <div className={styles.skillLevel}>75%</div>
            <h1 className={styles.skillName}>Python</h1>
            <p className={styles.skillInfo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
          </div>
        </div>
        <div className={`${styles.skillRow} ${currentRow === 3 ? styles.activeRow : ''}`}>
          <div className={styles.skillCard}>
            <img src="/image/java.png" className={styles.skillImg} alt="Java" />
            <div className={styles.skillLevel}>70%</div>
            <h1 className={styles.skillName}>Java</h1>
            <p className={styles.skillInfo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
          </div>
          <div className={styles.skillCard}>
            <img src="/image/postgres.png" className={styles.skillImg} alt="Postgres" />
            <div className={styles.skillLevel}>65%</div>
            <h1 className={styles.skillName}>Postgres</h1>
            <p className={styles.skillInfo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
          </div>
          <div className={styles.skillCard}>
            <img src="/image/github.png" className={styles.skillImg} alt="Github" />
            <div className={styles.skillLevel}>60%</div>
            <h1 className={styles.skillName}>Github</h1>
            <p className={styles.skillInfo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillss;
