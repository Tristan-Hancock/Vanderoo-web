// src/components/Introduction.js
import React from 'react';
import styles from '../styles/introduction.module.css';
import vanderoo from '../assets/vanderoo1.jpg';
function Introduction() {
  return (
    <section className={styles.introduction}>
      <div className={styles.contentLeft}>
        <h1 className={styles.title}>Vanderoo</h1>
        <h2 className={styles.subtitle}>Vanlife Better!</h2>
        <p className={styles.description}>
        </p>
  
      </div>
      <div className={styles.imageRight}>
      <img src={vanderoo} alt="Travelers with a van" className={styles.introImage} />
      </div>
    </section>
  );
}

export default Introduction;