import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles.css';

function EditDoctor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState({ name: '', department: '', experience: '' });

  useEffect(() => {
    const doctors = JSON.parse(localStorage.getItem('doctors')) || [];
    const selected = doctors.find((doc) => doc.id === parseInt(id));
    if (selected) setDoctor(selected);
  }, [id]);

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const doctors = JSON.parse(localStorage.getItem('doctors')) || [];
    const updated = doctors.map((doc) => (doc.id === parseInt(id) ? doctor : doc));
    localStorage.setItem('doctors', JSON.stringify(updated));
    alert('Doctor updated successfully!');
    navigate('/dashboard');
  };

  return (
    <div className="form-container">
      <h2>Edit Doctor</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" value={doctor.name} onChange={handleChange} required />
        <input type="text" name="department" value={doctor.department} onChange={handleChange} required />
        <input type="number" name="experience" value={doctor.experience} onChange={handleChange} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditDoctor;
