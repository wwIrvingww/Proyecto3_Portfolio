"use client";
import React, { useState, useEffect } from 'react';
import styles from '../styles/me.module.css';

const Skillss = () => {
  const [currentRow, setCurrentRow] = useState(1);
  const [prevRow, setPrevRow] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevRow(currentRow);
      setCurrentRow(prevRow => (prevRow % 3) + 1);
    }, 4250);

    return () => clearInterval(interval);
  }, [currentRow]);

  return (
    <div className={styles.skillSection}>
      <h1 className={styles.heading}>skills</h1>
      <div className={styles.skillContainer}>
        <div className={`${styles.skillRow} ${currentRow === 1 ? styles.activeRow : ''} ${prevRow === 1 && currentRow !== 1 ? styles.inactiveRow : ''}`}>
          <div id="html" className={styles.skillCard}>
            <img src="/image/html.png" className={styles.skillImg} alt="HTML" />
            <div className={styles.skillLevel}>Since 2023</div>
            <h1 className={styles.skillName}>HTML</h1>
            <p className={styles.skillInfo}>I&apos;ve worked with HTML in many projects to create webpage</p>
          </div>
          <div id="css" className={styles.skillCard}>
            <img src="/image/css.png" className={styles.skillImg} alt="CSS" />
            <div className={styles.skillLevel}>Since 2023</div>
            <h1 className={styles.skillName}>CSS</h1>
            <p className={styles.skillInfo}>I like to draw with CSS and create animations in my free time.</p>
          </div>
          <div id="javascript" className={styles.skillCard}>
            <img src="/image/js.png" className={styles.skillImg} alt="Javascript" />
            <div className={styles.skillLevel}>Since 2023</div>
            <h1 className={styles.skillName}>Javascript</h1>
            <p className={styles.skillInfo}>I like to use Javascript to create interactive web applications.</p>
          </div>
        </div>

        <div className={`${styles.skillRow} ${currentRow === 2 ? styles.activeRow : ''} ${prevRow === 2 && currentRow !== 2 ? styles.inactiveRow : ''}`}>
          <div id="figma" className={styles.skillCard}>
            <img src="/image/figma.png" className={styles.skillImg} alt="Figma" />
            <div className={styles.skillLevel}>Since 2022</div>
            <h1 className={styles.skillName}>Figma</h1>
            <p className={styles.skillInfo}>I use Figma to create wireframes and mockups for my projects.</p>
          </div>
          <div id="react" className={styles.skillCard}>
            <img src="/image/react.png" className={styles.skillImg} alt="React" />
            <div className={styles.skillLevel}>Since 2024</div>
            <h1 className={styles.skillName}>React</h1>
            <p className={styles.skillInfo}>I&apos;m currently using it to create web applications. </p>
          </div>
          <div id="python" className={styles.skillCard}>
            <img src="/image/python.png" className={styles.skillImg} alt="Python" />
            <div className={styles.skillLevel}>Since 2020</div>
            <h1 className={styles.skillName}>Python</h1>
            <p className={styles.skillInfo}>Python was the first programming language I learned. </p>
          </div>
        </div>

        <div className={`${styles.skillRow} ${currentRow === 3 ? styles.activeRow : ''} ${prevRow === 3 && currentRow !== 3 ? styles.inactiveRow : ''}`}>
          <div id="java" className={styles.skillCard}>
            <img src="/image/java.png" className={styles.skillImg} alt="Java" />
            <div className={styles.skillLevel}>Since 2021</div>
            <h1 className={styles.skillName}>Java</h1>
            <p className={styles.skillInfo}>Java it&apos;s the first language I learned in college.</p>
          </div>
          <div id="postgres" className={styles.skillCard}>
            <img src="/image/postgres.png" className={styles.skillImg} alt="Postgres" />
            <div className={styles.skillLevel}>Since 2024</div>
            <h1 className={styles.skillName}>Postgres</h1>
            <p className={styles.skillInfo}> Currentuly I&apos;m learning about relational databases and I began with Postgres</p>     
          </div>
          <div id="github" className={styles.skillCard}>
            <img src="/image/github.png" className={styles.skillImg} alt="Github" />
            <div className={styles.skillLevel}>Since 2022</div>
            <h1 className={styles.skillName}>Github</h1>
            <p className={styles.skillInfo}> I like to use Git to version control my projects and collaborate with other developers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillss;
