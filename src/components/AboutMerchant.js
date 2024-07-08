import React from 'react';
import styles from '../styles/aboutMerchant.module.css';

function AboutMerchant() {
  return (
    <section className={styles.aboutMerchant}>
      <div className={styles.content}>
        <h2>Become a Vanderoo Merchant</h2>
        <p>Join our growing community of merchants and boost your business visibility by featuring your services on the Vanderoo app.</p>
        <ul className={styles.benefits}>
          <li>Reach a wider audience with targeted ads.</li>
          <li>Feature your business directly in Vanderoo's mobile app.</li>
          <li>Customizable advertising solutions to meet your business needs.</li>
        </ul>
        <button className={styles.signUpButton} onClick={() => window.location.href = '/signup-merchant'}>
          Sign up as a Merchant
        </button>
      </div>
    </section>
  );
}

export default AboutMerchant;
