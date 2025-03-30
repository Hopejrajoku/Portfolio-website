import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} position-relative`}
      >
        <span className='d-none' id={idName}>&nbsp;</span>
        <Container className='mx-auto'>
          <Component />
        </Container>
      </motion.section>
    );
  };

export default SectionWrapper;
