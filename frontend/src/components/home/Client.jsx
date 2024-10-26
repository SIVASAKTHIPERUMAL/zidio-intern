import React, { useState } from 'react';
import './Client.css'; // Import CSS styles from a separate file

const Client = () => {
    // Array of client data
    const clientData = [
        {
            text: "Zidio exceeded our expectations. Their team was professional, responsive, and delivered a high-quality solution that perfectly aligned with our needs. We couldn’t be happier with the results.",
            author: "Mr. Ranjan Kumar Senapati",
            rating: 5,
            images: ["https://storage.googleapis.com/a1aa/image/PvLHGQebLTXQP6itT2fsfEKyJUwL30PiaeGSHZdmCxK0tnlOB.jpg"]
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
            images: ["https://storage.googleapis.com/a1aa/image/5jwnsDxK5t7tJJi0AVfhTKereXwKBRF2wMJey9eubhu9bPLdC.jpg"]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const update = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section>
            <div className="clients-container">
                <div className="clients-title">Client Reviews</div>
                <div className="clients-heading">Case Studies and Feedback on Our Project Outcomes</div>
                <div className="clients-images">
                    {clientData.map((client, index) => (
                        <img
                            key={index}
                            alt={`Customer ${index + 1}`}
                            height="60"
                            src={client.images[0]}
                            width="60"
                        />
                    ))}
                </div>
                <div className="clients-text">{clientData[currentIndex].text}</div>
                <div className="clients-rating">
                    {Array.from({ length: clientData[currentIndex].rating }).map((_, index) => (
                        <i key={index} className="fas fa-star"></i>
                    ))}
                </div>
                <div className="clients-author">{clientData[currentIndex].author}</div>
                <div className="clients-nav">
                    <button onClick={() => update(currentIndex > 0 ? currentIndex - 1 : clientData.length - 1)}>
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <button onClick={() => update(currentIndex < clientData.length - 1 ? currentIndex + 1 : 0)}>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Client;
