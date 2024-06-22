// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Features from './components/Features';
import AboutMerchant from './components/AboutMerchant';
import SupportCauses from './components/SupportCause';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Introduction/>
        <Showcase />
        <Features />
        <AboutMerchant />
        <SupportCauses />
      </div>
      <Footer />
    </div>
  );
}

export default App;
