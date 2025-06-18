import React, { useState, useEffect } from 'react';
import '../../styles.css';

function AssignDepartment() {
  const [doctors, setDoctors] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [department, setDepartment] = useState('');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('doctors')) || [];
    setDoctors(data);
  }, []);

  const handleAssign = () => {
    const updated = doctors.map(doc =>
      doc.id === parseInt(selectedId) ? { ...doc, department } : doc
    );
    localStorage.setItem('doctors', JSON.stringify(updated));
    alert('Department assigned!');
  };

  return (
    <div className="form-container">
      <h2>Assign Department</h2>
      <select onChange={(e) => setSelectedId(e.target.value)} value={selectedId}>
        <option value="">Select Doctor</option>
        {doctors.map((doc) => (
          <option key={doc.id} value={doc.id}>{doc.name}</option>
        ))}
      </select>
      <input type="text" placeholder="Enter Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
      <button onClick={handleAssign}>Assign</button>
    </div>
  );
}

export default AssignDepartment;
