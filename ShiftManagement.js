import React, { useState, useEffect } from 'react';
import '../../styles.css';

function ShiftManagement() {
  const [doctors, setDoctors] = useState([]);
  const [shifts, setShifts] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('doctors')) || [];
    setDoctors(data);
  }, []);

  const handleShiftChange = (id, value) => {
    setShifts({ ...shifts, [id]: value });
  };

  const saveShifts = () => {
    const updated = doctors.map(doc => ({
      ...doc,
      shift: shifts[doc.id] || doc.shift || 'Not Assigned'
    }));
    localStorage.setItem('doctors', JSON.stringify(updated));
    alert('Shifts saved!');
  };

  return (
    <div className="form-container">
      <h2>Shift Management</h2>
      {doctors.map(doc => (
        <div key={doc.id}>
          <strong>{doc.name}</strong>
          <input
            type="text"
            placeholder="Enter Shift (e.g. 9AM - 5PM)"
            value={shifts[doc.id] || doc.shift || ''}
            onChange={(e) => handleShiftChange(doc.id, e.target.value)}
          />
        </div>
      ))}
      <button onClick={saveShifts}>Save Shifts</button>
    </div>
  );
}

export default ShiftManagement;
