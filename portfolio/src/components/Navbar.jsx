import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h2>PORTFOLIO</h2>
      </div>
      <div className={styles.controls}>
        <div className={styles.nav}>
          <Link href="/about" legacyBehavior>
            <a className={styles.element}>About Me</a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a className={styles.element}>Projects</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={styles.element}>Contact Info</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
