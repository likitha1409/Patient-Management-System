// src/views/Specialists/Specialists.js
import React from 'react';
import './Specialist.css';

const Specialists = () => {
  return (
    <div className="specialist-page">
      <h2>Our Specialists</h2>
      <div className="specialist-grid">
        <div className="specialist-card">
          <h3>Cardiologist</h3>
          <p>We specialize in heart-related care and treatment.</p>
        </div>
        <div className="specialist-card">
          <h3>Neurologist</h3>
          <p>Specialized in treating disorders of the brain and nervous system including epilepsy, stroke, and more.</p>
        </div>
        <div className="specialist-card">
          <h3>Dermatologist</h3>
          <p>Skin and cosmetic treatments with care.</p>
        </div>
        <div className="specialist-card">
          <h3>Orthopedic</h3>
          <p>Bone and joint care by specialists.</p>
        </div>
      </div>
    </div>
  );
};

export default Specialists;
