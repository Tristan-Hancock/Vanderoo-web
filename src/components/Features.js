// src/components/Features.js
import React from 'react';
import styles from '../styles/features.module.css';
import biz from '../assets/bizfaves.png';
import comp1 from '../assets/Component 1.png';
import memory from '../assets/memory.png';
function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.sectionTitle}>
        <h2>Vanderoo In Many More Ways</h2>
        <p>DON'T JUST TRACK YOUR LOCATION</p>
      </div>
      <div className={styles.featureCards}>
        <div className={styles.featureCard}>
          <img src={comp1} alt="Location Reminders" />
          <h3>Location Reminders</h3>
          <p>Pin important spots and get timely alerts. Never miss a beat as you explore new places with smart, proximity-based notifications.</p>
        </div>
        <div className={styles.featureCard}>
          <img src={biz} alt="Community BizzFaves" />
          <h3>Community BizzFaves</h3>
          <p>Community BizzFaves Pin:
          Discover and share beloved local businesses globally. Drop a pin to recommend your favorite spots and explore community-curated gems wherever you roam.</p>
        </div>
         <div className={styles.featureCard}>
          <img src={memory} alt="Personalized Assistance" />
          <h3>Memory Markers</h3>
          <p>Capture and revisit your most cherished travel moments. Drop a pin, add photos and descriptions to create a personal, interactive travel diary that keeps your adventures alive.</p>
        </div>
      
        {/* <div className={styles.featureCard}>
          <img src="/path-to-assistance-image.png" alt="Regional Chat" />
          <h3>Regional Chat</h3>
          <p>Connect with fellow Vanderoo Nomads in your area. Share real-time locations, tips, and experiences to enhance your journey and build a global community.</p>
        </div>*/}
      </div> 
     
    </section>
  );
}

export default Features;