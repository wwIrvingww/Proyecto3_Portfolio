import React from 'react';
import { AiOutlineFileText, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import styles from '../styles/sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <a href="https://www.canva.com/design/DAF6v-APzTs/3gacaTAcqPqF9g4ObQSvfQ/view?utm_content=DAF6v-APzTs&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noopener noreferrer">
        <AiOutlineFileText size={30} className={styles.icon} />
      </a>
      <a href="https://github.com/wwIrvingww?tab=repositories" target="_blank" rel="noopener noreferrer">
        <AiFillGithub size={30} className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/irving-acosta-558502287/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size={30} className={styles.icon} />
      </a>
    </div>
  );
};

export default Sidebar;
