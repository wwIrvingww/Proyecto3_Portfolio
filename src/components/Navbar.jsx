"use client";
import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  useEffect(() => {
    console.log('Navbar mounted');
    return () => {
      console.log('Navbar unmounted');
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.element}>
          PORTFOLIO
        </Link>
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

export default React.memo(Navbar);
