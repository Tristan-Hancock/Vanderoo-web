// src/components/AboutMerchant.js
import React from 'react';
import styles from '../styles/aboutMerchant.module.css';

function AboutMerchant() {
  return (
    <section className={styles.aboutMerchant}>
      <h2>About the Merchant</h2>
      <p>Learn more about our merchants and how you can join them.</p>
      <button className={styles.signUpButton}>Sign up as a Merchant</button>
    </section>
  );
}

export default AboutMerchant;
