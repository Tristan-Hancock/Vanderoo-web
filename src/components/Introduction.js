// src/components/Introduction.js
import React from 'react';
import styles from '../styles/introduction.module.css';

function Introduction() {
  return (
    <section className={styles.introduction}>
      <div className={styles.contentLeft}>
        <h1 className={styles.title}>Vanderoo</h1>
        <h2 className={styles.subtitle}>Your road trip companion</h2>
        <p className={styles.description}>

          
        </p>
        {/* <div className={styles.buttons}>
          <button className={`${styles.btn} ${styles.primary}`}>Get Started</button>
          <button className={`${styles.btn} ${styles.secondary}`}>Learn More</button>
        </div> */}
      </div>
      <div className={styles.imageRight}>
        {/* Image will go here */}
      </div>
    </section>
  );
}

export default Introduction;