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
          <p>Download the Vanderoo app and join the nomad community and create your own Tribes!.</p>
          <p>Discover where fellow nomads are visiting and sharing their experiences as well as mark your favorite memorys</p>
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
