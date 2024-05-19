// components/Navbar.jsx
import React from 'react';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>ME</div>
      <div className={styles.links}>
        <a href="#about" className={styles.link}>About Me</a>
        <a href="#projects" className={styles.link}>Projects</a>
        <a href="#contact" className={styles.link}>Contact Info</a>
      </div>
    </div>
  );
}

export default Navbar;
