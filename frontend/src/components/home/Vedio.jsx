// Video.jsx
import React from 'react';
import './Vedio.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faClock, faPlay } from '@fortawesome/free-solid-svg-icons';

const Video = () => {
    const handlePlayClick = () => {
        alert('Play Video'); // Placeholder for video play logic
    };

    return (
        <div>
            <div className="header">
                <img 
                    alt="Team working together in an office setting" 
                    src="https://storage.googleapis.com/a1aa/image/NK52ea0D9PXtay9QlPgDFbjBUq0kGKbgC8FDBLl4eUsdDqpTA.jpg" 
                />
                <div className="overlay">
                    <p>Watch Now</p>
                    <h1>Our Best Working Process System with Team Expert Leaders</h1>
                    <div className="play-button" onClick={handlePlayClick}>
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                </div>
            </div>
            <div className="contact-info">
                <div className="info-box">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                    <p>
                        Call us Any time
                        <br />
                        <span>+918455807965</span>
                    </p>
                </div>
                <div className="info-box">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>
                        Send E-Mail
                        <br />
                        <span>support@zidio.in</span>
                    </p>
                </div>
                <div className="info-box">
                    <FontAwesomeIcon icon={faClock} />
                    <p>
                        Opening Hours
                        <br />
                        <span>Mon - Fri (9.00 - 5.30)</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Video;
