// src/components/TravelGuidelines.js
import React from 'react';
import '../styles/TravelGuidelines.css'
const TravelGuidelines = () => {
    return (
        <div className="travel-guidelines">
            <h1>Vanderoo Travel Guidelines</h1>
            <section className="section">
                <h2>Clean and Green Traveling</h2>
                <div className="bubble">
                    <h3>Respect Nature</h3>
                    <p>Keep our travel spots pristine by always cleaning up after yourself.</p>
                </div>
                <div className="bubble">
                    <h3>Trash Disposal</h3>
                    <p>Carry your trash until you can dispose of it properly at designated spots.</p>
                </div>
            </section>
            
            <section className="section">
                <h2>Lawful Parking</h2>
                <div className="bubble">
                    <h3>Parking Guidelines</h3>
                    <p>Follow local laws and guidelines to find safe and legal parking spots for your RV.</p>
                </div>
                <div className="bubble">
                    <h3>Safe Parking Tips</h3>
                    <p>Avoid parking in restricted areas. Here are tips to find the best spots...</p>
                </div>
            </section>

            <section className="section">
                <h2>Community Engagement</h2>
                <div className="bubble">
                    <h3>Share and Care</h3>
                    <p>Join our forum and share your tips and stories about traveling responsibly.</p>
                </div>
                <div className="bubble">
                    <h3>Local Laws</h3>
                    <p>Stay updated with the local regulations and parking laws of your travel destinations.</p>
                </div>
            </section>
        </div>
    );
};

export default TravelGuidelines;
