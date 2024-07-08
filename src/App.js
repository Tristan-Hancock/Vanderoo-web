import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Features from './components/Features';
import AboutMerchant from './components/AboutMerchant';
import SupportCauses from './components/SupportCause';
import Showcase from './components/Showcase';
import TravelGuidelines from './components/TravelGuidelines';
import ScrollAnimationWrapper from './components/ScrollAnimationWrapper'; // Import the wrapper

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <ScrollAnimationWrapper name="introduction">
          <Introduction />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper name="showcase">
          <Showcase />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper name="features">
          <Features />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper name="aboutMerchant">
          <AboutMerchant />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper name="supportCauses">
          <SupportCauses />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper name="travelGuidelines">
          <TravelGuidelines />
        </ScrollAnimationWrapper>
      </div>
      <Footer />
    </div>
  );
}

export default App;
