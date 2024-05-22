import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from '../styles/section.module.css'; // Crea este archivo CSS según tus necesidades

const Section = ({ id, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      id={id}
      className={styles.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Section;