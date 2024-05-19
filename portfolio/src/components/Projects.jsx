"use client"; 
import React, { useState } from 'react';
import styles from '../styles/projects.module.css';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Forkify",
      description: "Easy to use task management web application featuring locally stored data, task deletion undo, personalization options and more.",
      link: "https://eztasks.omarmoquete.dev/",
      image: "https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg"
    },
    {
      title: "Project 2",
      description: "Description for project 2. This is a brief description of what the project is about.",
      link: "#",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Project 3",
      description: "Description for project 3. This is a brief description of what the project is about.",
      link: "#",
      image: "https://via.placeholder.com/150"
    }
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handleBack = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>My Projects</h1>
        <p className={styles.description}>
          These are some of my favorite projects. I'm always looking for fun
          challenges to learn from. Any feedback is also appreciated!
        </p>
      </div>

      <div className={styles.slideContainer}>
        <button className={styles.buttonback} onClick={handleBack}>BACK</button>
        <div className={styles.slideContainer2}>
          <div className={styles.slide}>
            <div className={styles.descriptionC}>
              <h2>{slides[currentSlide].title}</h2>
              <p>{slides[currentSlide].description}</p>
              <a className={styles.btn} target="_blank" rel="noopener noreferrer" href={slides[currentSlide].link}>
                Open this project
              </a>
              <img className={styles.image} src={slides[currentSlide].image} alt="Project screenshots" />
            </div>
          </div>
        </div>
        <button className={styles.buttonnext} onClick={handleNext}>NEXT</button>
      </div>
    </div>
  );
}

export default Projects;