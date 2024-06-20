// src/components/SupportCauses.js
import React from 'react';
import styles from '../styles/supportCauses.module.css';

function SupportCauses() {
  return (
    <section className={styles.supportCauses}>
      <h2>Support Worthy Causes</h2>
      <p>Find out how you can support our causes and make a difference.</p>
      <button className={styles.supportButton}>Support Now</button>
    </section>
  );
}

export default SupportCauses;
