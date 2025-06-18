// src/components/AddPatient.js
import React, { useState } from 'react';
import '../styles.css';

const AddPatient = () => {
  const [patient, setPatient] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
    diagnosis: '',
  });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Patient:', patient);
    alert('Patient added successfully!');
    setPatient({ name: '', age: '', gender: '', contact: '', diagnosis: '' });
  };

  return (
    <div className="form-container">
      <h2>🧑‍⚕️ Add New Patient</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={patient.name} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={patient.age} onChange={handleChange} required />
        <select name="gender" value={patient.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="text" name="contact" placeholder="Contact Number" value={patient.contact} onChange={handleChange} required />
        <input type="text" name="diagnosis" placeholder="Diagnosis" value={patient.diagnosis} onChange={handleChange} required />
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
};

export default AddPatient;
