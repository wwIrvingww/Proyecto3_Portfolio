import React from 'react';
import styles from '../styles/skills.module.css';

const Skills = () => {
  return (
    <div className={styles.skillsWrapper}>
      <div className={styles.text}>
        <h1 className={styles.title}>My Skills</h1>
        <p className={styles.description}>
          The following skills are part of my toolbox. One of the things I
          love is learning new technologies. It's amazing how huge technology
          is!
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.skillsContainer}>
           <div className={styles.skill}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Skill 1" className={styles.skillImage} />
                <span>Python</span> 
            </div>
            <div className={styles.skill}>
                <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/java_logo_icon_169577.png" alt="Skill 2" className={styles.skillImage} />
                <span>Java</span> 
            </div>
            <div className={styles.skill}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/800px-Postgresql_elephant.svg.png" alt="Skill 3" className={styles.skillImage} />
                <span>PostgreSQL</span> 
            </div>
            <div className={styles.skill}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="Skill 4" className={styles.skillImage} />
                <span>JavaScript</span> 
            </div>
            <div className={styles.skill}>
                <img src="https://serprogramador.com.ar/wp-content/uploads/2018/09/Html5_diseno_web-1.png" alt="Skill 5" className={styles.skillImage} />
                <span>HTML</span> 
            </div>
            <div className={styles.skill}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png" alt="Skill 6" className={styles.skillImage} />
                <span>CSS</span> 
            </div>
            <div className={styles.skill}>
                <img src="https://miro.medium.com/v2/resize:fit:1200/1*WA_9JsyqFkge2HwYKcdJQw.png" alt="Skill 7" className={styles.skillImage} />
                <span>React</span> 
            </div>
            <div className={styles.skill}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Skill 8" className={styles.skillImage} />
                <span>GitHub</span> 
            </div>
            <div className={styles.skill}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png" alt="Skill 9" className={styles.skillImage} />
                <span>Figma</span> 
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
