// src/components/Footer.js
import React from 'react';
import styles from '../styles/footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.companyInfo}>
          <h3>Vanderoo</h3>
          <p>Connecting Merchants with Customers</p>
        </div>
        <div className={styles.links}>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <div className={styles.socialMedia}>
          <a href="#facebook"><FaFacebook /></a>
          <a href="#twitter"><FaTwitter /></a>
          <a href="#instagram"><FaInstagram /></a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Vanderoo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
