// src/components/Showcase.js
import React from 'react';
import styles from '../styles/showcase.module.css';
import iphone from '../assets/IphoneVanderoo.png';
import appstore from '../assets/appstore.png';
import playstore from '../assets/playstore.png';
function Showcase() {
  return (
    <section className={styles.showcase}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={iphone} alt="Showcase" className={styles.image} />
          <div className={styles.imageShadow}></div>
          

        </div>
        <div className={styles.textContainer}>
          <h2>The Vanderoo App</h2>
          <p>Connect with travelers as they pass through your region.</p>
          <p>Promote your business as a beacon of support for people who work and live on the road.</p>
          <p>Offer discounts that will attract up to 16.9 Million US travelers to your business.</p>
        </div>
      </div>
      <div className={styles.imageLinks}>
  <a href="link-to-page1">
    <img src={appstore} alt="App Store" className={styles.linkedImage} />
  </a>
  <a href="link-to-page2">
    <img src={playstore} alt="Play Store" className={styles.linkedImage} />
  </a>
</div>

    </section>
  );
}

export default Showcase;
