import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
    {
        text: "Zidio exceeded our expectations. Their team was professional, responsive, and delivered a high-quality solution that perfectly aligned with our needs. We couldn’t be happier with the results.",
        author: "Mr. Ranjan Kumar Senapati",
        rating: 5,
        images: ["https://zidio.in/assets/images/team/animesh.jpg"]
    },
    {
        text: "I had a fantastic experience working with Zidio. Their commitment to excellence is unmatched, and the final product was beyond my expectations.",
        author: "Ms. Neha Sharma",
        rating: 5,
        images: ["https://storage.googleapis.com/a1aa/image/5ZsTmkVApBKcEVYFRGfH1KWQPZdCljrNzCvy2r60Cx9t9s0JA.jpg"]
    },
    {
        text: "The team at Zidio was exceptional! They listened to our needs and delivered on time with great results.",
        author: "Mr. Anil Gupta",
        rating: 4,
        images: ["https://storage.googleapis.com/a1aa/image/IAm2wqCorFLpKlL60IUbLYIA1dVOFJNzyolaPOfRHyXv9s0JA.jpg"]
    },
    {
        text: "Amazing service! I would highly recommend Zidio to anyone looking for quality and efficiency.",
        author: "Ms. Priya Reddy",
        rating: 5,
        images: []
    }
];

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonial = testimonials[currentIndex];

    const containerStyle = {
        textAlign: 'center',
        padding: '50px',
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        maxWidth: '800px',
        width: '100%',
        margin: '0 auto', // Center the container
    };

    const beforeStyle = {
        content: '“',
        fontSize: '200px',
        color: 'rgba(0, 0, 255, 0.1)',
        position: 'absolute',
        top: '20px',
        left: '20px',
    };

    const afterStyle = {
        content: '”',
        position: 'absolute',
        right: '20px',
        top: '20px',
        fontSize: '200px',
        color: 'rgba(0, 0, 255, 0.1)',
    };

    const titleStyle = {
        color: '#007bff',
        fontSize: '18px',
        marginBottom: '10px',
    };

    const headingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    };

    const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '20px',
    };

    const imageStyle = {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        border: '3px solid #007bff',
    };

    const textStyle = {
        fontSize: '16px',
        color: '#555',
        marginBottom: '20px',
    };

    const ratingStyle = {
        color: '#ffcc00',
        marginBottom: '20px',
    };

    const authorStyle = {
        fontSize: '16px',
        color: '#007bff',
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px',
    };

    const buttonStyle = {
        background: '#007bff',
        border: 'none',
        color: '#fff',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <div style={titleStyle}>Client Reviews</div>
            <div style={headingStyle}>Case Studies and Feedback on Our Project Outcomes</div>
            <div style={imageContainerStyle}>
                {testimonial.images.map((image, index) => (
                    <img key={index} alt={`Customer ${index + 1}`} src={image} style={imageStyle} />
                ))}
            </div>
            <div style={textStyle}>{testimonial.text}</div>
            <div style={ratingStyle}>
                {[...Array(testimonial.rating)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} />
                ))}
            </div>
            <div style={authorStyle}>{testimonial.author}</div>
            <div style={navStyle}>
                <button style={buttonStyle} onClick={() => setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1)}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button style={buttonStyle} onClick={() => setCurrentIndex(currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0)}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default TestimonialSection;
