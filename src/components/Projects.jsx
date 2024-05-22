"use client";
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from '../styles/projects.module.css';
import Carousel from './Carousel';
import Particules from './Particules';
import StaticCarousel from './Carousel';

const Projects = () => {
  return (
    <>
   
   
    <div className={styles.container}>   
  
      <div className={styles.text}>
        <h1 className={styles.title}>My Projects</h1>
        <p className={styles.description}>
          These are some of my favorite projects. I&apos;m always looking for fun
          challenges to learn from. Any feedback is also appreciated!
        </p>
      </div>  
      <Carousel />
      <div className={styles.particleCont}>
      <Particules color="#5D0E41" />
        </div>
    </div>
 
    </>
    
  );
}

export default Projects;
