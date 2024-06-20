// src/components/Header.js
import React, { useEffect, useState } from 'react';
import styles from '../styles/navbar.module.css';
import vanderoologo from '../assets/vanderoologo.jpg';
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={vanderoologo} alt="" className={styles.logoImage} />
          Vanderoo
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#merchant">Merchant</a></li>
          <l1><a href="#contact">Contact Us</a></l1>
          <li><a href="#download">Download App</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
