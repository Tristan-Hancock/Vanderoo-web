// src/components/Introduction.js
import React from 'react';
import styles from '../styles/introduction.module.css';

function Introduction() {
  return (
    <section className={styles.introduction}>
      <h2>Vanderoo</h2>
      <p>Connecting Merchants with Customers</p>
      <p>Vanderoo is an innovative app designed to bring merchants and customers closer together, offering a seamless experience for both parties.</p>
    </section>
  );
}

export default Introduction;
