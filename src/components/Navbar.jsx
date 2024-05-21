"use client";
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <ScrollLink to="/" smooth={true} duration={500} spy={true} className={styles.element}>
          PORTFOLIO
        </ScrollLink>
      </div>
      <div className={styles.controls}>
        <div className={styles.nav}>
          <ScrollLink to="about" smooth={true} duration={500} spy={true} className={styles.element}>
            About Me
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} spy={true} className={styles.element}>
            Projects
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} spy={true} className={styles.element}>
            Contact Info
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;