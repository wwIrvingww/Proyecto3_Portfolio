import React, { useState } from 'react';
import styles from '../styles/carousel.module.css';

const slides = [
  {
    title: "Drawing CSS",
    description: "This is a project where I draw a cassette using only CSS. It was a fun challenge to learn more about CSS and its capabilities.",
    buttonText: 'Open project',
    imageUrl: "https://i.pinimg.com/originals/da/59/64/da5964743948ec95788d355ae7811f20.png"
    },
  {
    title: "Blog",
    description: "This is a blog project where I write about my experiences as a chef. I share tips and tricks that I&apos;ve learned along the way.",
    buttonText: 'Open project',
    imageUrl: "https://i.pinimg.com/736x/23/a2/dc/23a2dc9c4c096fe3c87a6b5e9fb3dafc.jpg"
    },
  {
    title: "Redesign to IRTRA",
    description: "This is a project where I create the IRTRA APP. I wanted to give it a more modern look and feel to attract more visitors.",
    buttonText: 'Open project',
    imageUrl: "https://i.pinimg.com/736x/4d/6e/71/4d6e71e4748061c1d0b02ed0ab649d8c.jpg"
}
];

const StaticCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slideContent}>
        <h2 className={styles.slideTitle}>{slides[currentSlide].title}</h2>
        <p className={styles.slideDescription}>{slides[currentSlide].description}</p>
        <button className={styles.slideButton}>{slides[currentSlide].buttonText}</button>
      </div>
      <div className={styles.slideImage}>
        <img src={slides[currentSlide].imageUrl} alt="Slide" />
      </div>
      <div className={styles.sliderControls}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.controlDot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default StaticCarousel;
