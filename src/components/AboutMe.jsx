"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/aboutme.module.css';
import Skills from './_Skills';
import Skillss from './Skillss';
import { FaSwimmer, FaBook, FaPenFancy, FaChess } from 'react-icons/fa';

const AboutMe = () => {
  const containerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('right');

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const container = containerRef.current;
        if (scrollDirection === 'right') {
          container.scrollBy({
            top: 0,
            left: container.offsetWidth / 0.5,
            behavior: 'smooth',
          });
          if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
            setScrollDirection('left');
          }
        } else {
          container.scrollBy({
            top: 0,
            left: -container.offsetWidth / 0.5,
            behavior: 'smooth',
          });
          if (container.scrollLeft === 0) {
            setScrollDirection('right');
          }
        }
      }
    }, 5000); 

    return () => clearInterval(interval);
  }, [scrollDirection]);

  return (
    <div className={styles.containerMAX}>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.section}>
          <div className={styles.card}>
            <div className={styles.imageSection}>
              <div className={styles.overlay}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FF0066" d="M41.2,-63.9C54.7,-55.4,67.9,-46.2,76.8,-33.2C85.7,-20.1,90.3,-3.3,86.9,11.7C83.4,26.6,72,39.5,60.7,52.7C49.4,66,38.4,79.5,23.8,86C9.3,92.6,-8.8,92.1,-23.5,85.4C-38.3,78.7,-49.6,65.8,-59,52.5C-68.4,39.2,-75.8,25.6,-80.7,9.9C-85.6,-5.8,-87.9,-23.5,-81.6,-37.2C-75.2,-50.9,-60.2,-60.5,-45.1,-68.3C-30.1,-76.1,-15,-82,-0.6,-81.1C13.8,-80.2,27.7,-72.4,41.2,-63.9Z" transform="translate(100 100)" />
                </svg>
              </div>
              <img src="/image/me.png" alt="Profile" className={styles.image} />
            </div>
            <div className={styles.infoSection}>
              <h2>About me</h2>
              <p>
                I like programming, and I&apos;m always looking for new challenges to learn from. I&apos;m a frontend developer with experience in React and Node.js. I&apos;m also familiar with Python and Java.
              </p>
              <p className={styles.hobbiesTitle}>
                <u>Hobbies</u>
              </p>
              <ul className={styles.hobbiesList}>
                <li><FaSwimmer className={styles.icon} /> swimming</li>
                <li><FaBook className={styles.icon} /> reading</li>
                <li><FaPenFancy className={styles.icon} /> creative writing</li>
                <li><FaChess className={styles.icon} /> chess</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.skillsSection}>
            <Skillss />
            {/* <Skills /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
