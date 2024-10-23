import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import Founder1 from './assets/founder1.jpg';
import Founder2 from './assets/founder2.jpg';
import Founder3 from './assets/founder3.jpg';
import Founder4 from './assets/founder4.jpg';
import Founder5 from './assets/founder5.jpg';
import Founder6 from './assets/founder6.jpg';
import './Founder.css'; // Import your CSS file for styles

const founderData = [
  {
    image: Founder1,
    name: 'Meena',
  },
  {
    image: Founder2,
    name: 'Monisha',
  },
  {
    image: Founder5,
    name: 'Rohit',
  },
  {
    image: Founder3,
    name: 'Arun',
  },
  {
    image: Founder4,
    name: 'Santosh',
  },
  {
    image: Founder6,
    name: 'Sanjay',
  },
];

const Founder = () => {
  const fadeInElements = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 } // Adjust as needed
    );

    fadeInElements.current.forEach((el) => observer.observe(el));

    return () => fadeInElements.current.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div
      style={{
        marginTop: '80px',
        padding: '20px',
        fontFamily: 'Nunito, sans',
        backgroundColor: 'transparent',
      }}
    >
      <h2
        style={{
          fontSize: '4rem',
          textAlign: 'center',
          margin: '24px 0',
          letterSpacing: '0.05em',
        }}
      >
        <span style={head}>Meet our </span>
        <span style={gradientTextStyle}>Founders</span>
      </h2>

      <div className="founder-cards-container">
        {founderData.map((founder, index) => (
          <div
            className="founder-card fade-in"
            key={index}
            ref={(el) => (fadeInElements.current[index] = el)}
          >
            <img
              src={founder.image}
              alt={founder.name}
              className="founder-image"
            />
            <h3 className="founder-name">{founder.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const gradientTextStyle = {
  backgroundImage: 'linear-gradient(to right, #DA70D6, #C71585)',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  fontFamily: 'TT Neoris, sans-serif', // Apply the TT Neoris font
  fontWeight: 'bold', // Ensure it is bold
};

const head = {
  fontFamily: 'TT Neoris, sans-serif', // Apply the TT Neoris font
  fontWeight: 'bold', // Ensure it is bold
};

export default Founder;
