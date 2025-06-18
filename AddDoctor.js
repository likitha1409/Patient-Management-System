import React, { useState } from 'react';
import '../../styles.css'; // Adjust path as per your structure

function AddDoctor() {
  const [doctor, setDoctor] = useState({ name: '', department: '', experience: '' });

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let existing = JSON.parse(localStorage.getItem('doctors')) || [];
    localStorage.setItem('doctors', JSON.stringify([...existing, { ...doctor, id: Date.now() }]));
    alert('Doctor added successfully!');
    setDoctor({ name: '', department: '', experience: '' });
  };

  return (
    <div className="form-container">
      <h2>Add Doctor</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Doctor Name" value={doctor.name} onChange={handleChange} required />
        <input type="text" name="department" placeholder="Department" value={doctor.department} onChange={handleChange} required />
        <input type="number" name="experience" placeholder="Experience (years)" value={doctor.experience} onChange={handleChange} required />
        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
}

export default AddDoctor;
