// components/ParallaxSection.jsx
import { Parallax } from 'react-parallax';
import styles from '../styles/parallaxSection.module.css';

const ParallaxSection = ({ bgImage, strength, children }) => (
  <Parallax bgImage={bgImage} strength={strength}>
    <div className={styles.parallaxContent}>
      {children}
    </div>
  </Parallax>
);

export default ParallaxSection;
