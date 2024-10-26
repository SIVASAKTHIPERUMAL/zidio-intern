import React from 'react';
import './About.css'; 

const About = () => {
    return (
        <div className="container">
            <div className="left-section">
                {/* New History Section */}
                <div className="history-section">
                    <h2>OUR HISTORY </h2>
                    <img 
                        src="https://pbs.twimg.com/media/GSq-ZrvXkAA-qxX?format=jpg&name=4096x4096" 
                        alt="Zidio History" 
                        style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }} 
                    />
                    <div className="milestone">
                        <h3>2019: Foundation of Zidio</h3>
                        <p>Established as a startup focusing on software development.</p>
                    </div>
                    <div className="milestone">
                        <h3>2020: First Major Project</h3>
                        <p>Successfully delivered our first large-scale application for a retail client.</p>
                    </div>
                    <div className="milestone">
                        <h3>2021: Expansion of Services</h3>
                        <p>Expanded our service offerings to include cloud solutions and IT consulting.</p>
                    </div>
                    <div className="milestone">
                        <h3>2022: Global Reach</h3>
                        <p>Partnered with international clients and established a global presence.</p>
                    </div>
                    <div className="milestone">
                        <h3>2023: Award Recognition</h3>
                        <p>Awarded 'Best IT Services Provider' at the Tech Innovation Awards.</p>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <h2>Software Development & Services</h2>
                <h1>Your Reliable Partner for IT Services Dedicated to Your Success</h1>
                <p>
                    At Zidio, we're your trusted IT services partner, ensuring your success with reliable solutions tailored to your business needs. Count on us for robust software development, comprehensive IT support, and cutting-edge technology solutions that empower your business to thrive.
                </p>
                <div className="features">
                    <div className="feature-box">
                        <i className="fas fa-dollar-sign"></i>
                        <p>Cost Effective Solutions</p>
                    </div>
                    <div className="feature-box">
                        <i className="fas fa-users"></i>
                        <p>Expert & Dedicated Team Members</p>
                    </div>
                    <div className="feature-box">
                        <i className="fas fa-headset"></i>
                        <p>24/7 Free Technical Supports</p>
                    </div>
                    <div className="feature-box">
                        <i className="fas fa-thumbs-up"></i>
                        <p>100% Customers Satisfaction</p>
                    </div>
                </div>
                <div className="button-container">
                    <a href="#" className="btn">
                        ABOUT MORE <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
