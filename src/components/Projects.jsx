"use client";
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from '../styles/projects.module.css';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  const [initialLoad, setInitialLoad] = useState(true);

  const slides = [
    {
      title: "Drawing CSS",
      description: "This is a project where I draw a cassette using only CSS. It was a fun challenge to learn more about CSS and its capabilities.",
      link: "https://github.com/wwIrvingww/Lab04_CSSonly.git",
      image: "https://i.pinimg.com/originals/da/59/64/da5964743948ec95788d355ae7811f20.png"
    },
    {
      title: "Blog",
      description: "This is a blog project where I write about my experiences as a chef. I share tips and tricks that I&apos;ve learned along the way.",
      link: "https://github.com/wwIrvingww/Proyecto1_Blog.git",
      image: "https://i.pinimg.com/736x/23/a2/dc/23a2dc9c4c096fe3c87a6b5e9fb3dafc.jpg"
    },
    {
      title: "Redesign to IRTRA",
      description: "This is a project where I create the IRTRA APP. I wanted to give it a more modern look and feel to attract more visitors.",
      link: "#",
      image: "https://i.pinimg.com/736x/4d/6e/71/4d6e71e4748061c1d0b02ed0ab649d8c.jpg"
    }
  ];

  const handleNext = () => {
    setDirection('next');
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handleBack = () => {
    setDirection('back');
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  const transitions = useSpring({
    from: {
      opacity: initialLoad ? 1 : 0,
      transform: initialLoad ? 'translateX(0%)' : direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)'
    },
    to: {
      opacity: 1,
      transform: 'translateX(0%)'
    },
    reset: !initialLoad,
    immediate: initialLoad,
  });

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>My Projects</h1>
        <p className={styles.description}>
          These are some of my favorite projects. I&apos;m always looking for fun
          challenges to learn from. Any feedback is also appreciated!
        </p>
      </div>

      <div className={styles.slideContainer}>
        <button className={styles.buttonback} onClick={handleBack}>BACK</button>
        <div className={styles.slideContainer2}>
          <animated.div style={transitions} className={styles.slide}>
            <div className={styles.descriptionC}>
              <h2>{slides[currentSlide].title}</h2>
              <p>{slides[currentSlide].description}</p>
              <a className={styles.btn} target="_blank" rel="noopener noreferrer" href={slides[currentSlide].link}>
                Open this project
              </a>
              <img className={styles.image} src={slides[currentSlide].image} alt="Project screenshots" />
            </div>
          </animated.div>
        </div>
        <button className={styles.buttonnext} onClick={handleNext}>NEXT</button>
      </div>
    </div>
  );
}

export default Projects;
