// End.jsx
import React from 'react';
import './End.css'; // Link the CSS file

const End = () => {
    return (
        <div className="container123">
            <div className="column12">
                <img alt="Zidio Development Logo" height="100" src="https://zidio.in/assets/images/home-1/zidio%20(1).png" width="200" color='white'/>
                <p>
                    At Zidio Development, we specialize in innovative software solutions. Our team is dedicated to delivering high-quality projects, fostering professional growth, and driving technological advancement.
                </p>
                <a className="discover-more" href="#">
                    Discover More
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
            <div className="column12">
                <h3>Company</h3>
                <a href="#"><i className="fas fa-arrow-right"></i> About</a>
                <a href="#"><i className="fas fa-arrow-right"></i> Our Team</a>
                <a href="#"><i className="fas fa-arrow-right"></i> Contact</a>
                <a href="#"><i className="fas fa-arrow-right"></i> Careers</a>
            </div>
            <div className="column12">
                <h3>Our Services</h3>
                <a href="#"><i className="fas fa-arrow-right"></i> IT Solutions</a>
                <a href="#"><i className="fas fa-arrow-right"></i> Cyber Security</a>
                <a href="#"><i className="fas fa-arrow-right"></i> Digital Marketing</a>
                <a href="#"><i className="fas fa-arrow-right"></i> Machine Learning</a>
                <a href="#"><i className="fas fa-arrow-right"></i> Cloud Services</a>
            </div>
            <div className="column12">
                <h3>Newsletter</h3>
                <p>Subscribe to Latest Newsletter</p>
                <div className="subscribe">
                    <input placeholder="Enter Your E-Mail" type="email"/>
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="footer12">
                <p>© 2024 @ Zidio Development. Designed by Team ZIDIO.</p>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    );
};

export default End;
