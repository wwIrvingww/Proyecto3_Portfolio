// Sidebar.jsx
import React from 'react';
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import styles from '../styles/sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <AiOutlineMail size={30} className={styles.icon} />
      <AiFillGithub size={30} className={styles.icon} />
      <AiFillLinkedin size={30} className={styles.icon} />
    </div>
  );
};

export default Sidebar;
