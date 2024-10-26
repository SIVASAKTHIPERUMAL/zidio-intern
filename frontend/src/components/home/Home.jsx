import React, { useState } from 'react';
import './Home.css'; // Ensure this file includes styles for your component
import About from './About'; // Ensure the correct case is used for the filename
import Client from './Client';
import Job from './Job';
   // Ensure the correct case for 'Team'
import Vedio from './Vedio'
import Awards from './Awards';


function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <>
      <section className="hero">
        <p>Software Development & Consultancy</p>
        <h1>Business Innovation Through Technology</h1>
        <p>Leading the Business World with Technological Solutions</p>
        <div className="buttons">
          <a href="#" className="button">Learn More</a>
          <a href="#" className="button">Get Started</a>
        </div>
      </section>

      <section className="features1">
        <div className="feature1">
          <i className="fas fa-award icon"></i>
          <h3>3+ Year Experience</h3>
          <p>Over 3 years of expertise delivering unparalleled solutions and insights for your success</p>
          <p>Read more</p>
        </div>
        <div className="feature1">
          <i className="fas fa-users icon"></i>
          <h3>Dedicated Members</h3>
          <p>Passionate team members dedicated to achieving mutual success</p>
          <p>Read more</p>
        </div>
        <div className="feature1">
          <i className="fas fa-headset icon"></i>
          <h3>Valuable Supports</h3>
          <p>Tailored support and guidance ensuring reliability and innovation every step of the way</p>
        </div>
      </section>
      <div>  {/* Insert the About component */}
      <About />
      </div>
    
      <section className="services" style={{ backgroundColor: '#00144e', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '56px', marginBottom: '20px',fontFamily:"serif" }}>What We Are Offering</h2>
        <div className="service-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { icon: 'fas fa-paint-brush', title: 'Graphic Design', desc: 'Creating visually appealing designs for your business.' },
            { icon: 'fas fa-cloud', title: 'Cloud Solutions', desc: 'Offering reliable and secure cloud solutions.' },
            { icon: 'fas fa-code', title: 'Web Development', desc: 'Building responsive and functional websites.' },
            { icon: 'fas fa-bullhorn', title: 'Digital Marketing', desc: 'Boosting your online presence with effective marketing strategies.' },
            { icon: 'fas fa-vector-square', title: '3D Vector Illustration', desc: 'Creating stunning 3D vector illustrations for your projects.' },
            { icon: 'fas fa-server', title: 'Hosting Services', desc: 'Providing reliable and secure hosting solutions.' },
          ].map((service, index) => (
            <div
              key={index}
              className="service"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundColor: hoveredIndex === index ? 'white' : '#0044ff',
                padding: '30px',
                borderRadius: '8px',
                width: '100%',
                textAlign: 'center',
                transition: 'background-color 0.3s ease',
                color: hoveredIndex === index ? 'black' : 'white',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
              }}
            >
              <i className={service.icon} style={{ fontSize: '50px', color: hoveredIndex === index ? '#0044ff' : 'white', marginBottom: '10px' }}></i>
              <h3 style={{ fontSize: '28px', marginBottom: '10px' }}>{service.title}</h3>
              <p style={{ fontSize: '18px', color: '#ccc' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{ backgroundColor: '#f4f4f4', padding: '40px 20px' }}>
      <div>
      <p style={{ textAlign: 'center', fontSize: '28px', color: '#555' }}>
        Dedicated Team
      </p>
      <h3 style={{ textAlign: 'center', fontSize: '48px', color: '#333', marginBottom: '10px',fontFamily:"initial" }}>
        Meet Our Dedicated Member
      </h3>
      <h2 style={{ textAlign: 'center', fontSize: '28px', fontWeight: 'bold', color: '#007bff', marginBottom: '20px' ,fontFamily:"initial"}}>
        For Any Enquiry
      </h2>
    </div>
  <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
    <div className="team" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap' }}>
      {[
        {
          name: 'Animesh Singh',
          role: 'Full Stack Web Developer',
          image: 'https://storage.googleapis.com/a1aa/image/y8x775cg6KLbAVlhKgxiBfiNC2Yu8GKWf1TukyedHHQlAzSnA.jpg',
          linkedin: 'https://www.linkedin.com/in/animesh-singh/',
          github: 'https://github.com/animesh-singh',
        },
        {
          name: 'Salma Husna Salsabila',
          role: 'UI/UX Designer',
          image: 'https://storage.googleapis.com/a1aa/image/OuSLpo4Z9AbCOVVzdlv3bTh2jPED4N85uLlHhci0gK1DYW6E.jpg',
          linkedin: 'https://www.linkedin.com/in/salma-husna/',
          github: 'https://github.com/salma-husna',
        },
        {
          name: 'Chandan Mishra',
          role: 'Data Scientist',
          image: 'https://storage.googleapis.com/a1aa/image/lpoomQL88doiFxf4I14uEc4OUpb8mRYAwULfeGP2uZ6jAzSnA.jpg',
          linkedin: 'https://www.linkedin.com/in/chandan-mishra/',
          github: 'https://github.com/chandan-mishra',
        },
        {
          name: 'Priya Sharma',
          role: 'Project Manager',
          image: 'https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944', // Replace with an actual image URL
          linkedin: 'https://www.linkedin.com/in/priya-sharma/',
          github: 'https://github.com/priya-sharma',
        },
      ].map((member, index) => (
        <div
          key={index}
          className="team-member"
          style={{
            position: 'relative',
            width: '300px', // Increased width for the card
            height: '430px', // Increased height for cards
            margin: '15px', // Margin for spacing
            perspective: '1000px',
          }}
        >
          <div
            className="card"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transition: 'transform 0.6s',
              transformStyle: 'preserve-3d',
              cursor: 'pointer',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Enhanced shadow
            }}
          >
            {/* Front Side */}
            <div
              className="card-side card-front"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                textAlign: 'center',
                borderRadius: '8px',
                backgroundColor: 'white',
                padding: '20px',
                boxSizing: 'border-box',
              }}
            >
              <img
                alt={`Portrait of ${member.name}`}
                src={member.image}
                style={{ width: '100%', borderRadius: '8px', marginBottom: '10px', objectFit: 'cover' }}
              />
              <h3 style={{ fontSize: '20px', marginBottom: '5px' }}>{member.name}</h3>
              <p style={{ fontSize: '14px', color: '#777', marginBottom: '10px', textAlign: 'center' }}>{member.role}</p>
              <a
                href="#"
                style={{
                  display: 'inline-block',
                  padding: '10px 15px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  marginTop: '10px',
                }}
              >
                View More
              </a>
            </div>

            {/* Back Side */}
            <div
              className="card-side card-back"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                textAlign: 'center',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Enhanced shadow
                padding: '10px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transform: 'rotateY(180deg)',
              }}
            >
              <div className="video-container" style={{ padding: '10px', textAlign: 'center' }}>
                <video src="sample-video.mp4" controls style={{ width: '100%', borderRadius: '8px', height: 'auto' }}></video>
              </div>
              <div className="social" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <a href={`https://api.whatsapp.com/send?phone=1234567890`} target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                  <i className="fab fa-whatsapp" style={{ fontSize: '24px', color: '#25D366' }}></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                  <i className="fab fa-instagram" style={{ fontSize: '24px', color: '#C13584' }}></i>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                  <i className="fab fa-facebook" style={{ fontSize: '24px', color: '#1877F2' }}></i>
                </a>
              </div>
              <div style={{ marginTop: '10px' }}>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                  <i className="fab fa-linkedin" style={{ fontSize: '24px', color: '#0077b5' }}></i>
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                  <i className="fab fa-github" style={{ fontSize: '24px', color: '#333' }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      ))}
    </div>
  </div>
  <a
        className="all-members"
        href="#"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          marginLeft:'50%',
          fontSize: '18px',
          color: '#007bff',
          textDecoration: 'underline',
          textAlign: 'center'
        }}
      >
        All Members
      </a>
</section>


 <section
      className="stats"
      style={{
        backgroundColor: '#0033cc',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center'
      }}
    >
      <div
        className="stat-list"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px'
        }}
      >
        <div className="stat" style={{ width: '200px' }}>
          <h3 style={{ fontSize: '36px', marginBottom: '10px' }}>1K+</h3>
          <p style={{ fontSize: '18px', color: '#ccc' }}>Happy Customers</p>
        </div>
        <div className="stat" style={{ width: '200px' }}>
          <h3 style={{ fontSize: '36px', marginBottom: '10px' }}>2K+</h3>
          <p style={{ fontSize: '18px', color: '#ccc' }}>Projects Completed</p>
        </div>
        <div className="stat" style={{ width: '200px' }}>
          <h3 style={{ fontSize: '36px', marginBottom: '10px' }}>99+</h3>
          <p style={{ fontSize: '18px', color: '#ccc' }}>Reviews</p>
        </div>
        <div className="stat" style={{ width: '200px' }}>
          <h3 style={{ fontSize: '36px', marginBottom: '10px' }}>100%</h3>
          <p style={{ fontSize: '18px', color: '#ccc' }}>Satisfaction Rate</p>
        </div>
      </div>
    </section>


     <Client/>


     <Job/>

        
     <div className="App">
            <Vedio />
        </div>


        <Awards/>
        
    </>
  );
}

export default Home;
