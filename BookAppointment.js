import React, { useState } from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
import '../../styles.css';

export default function BookAppointment() {
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Booked with Dr. ${doctor} on ${date}`);
  };

  return (
    <div className="appointment-container">
      <h2><FaCalendarCheck /> Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Doctor Name"
          value={doctor}
          required
          onChange={e => setDoctor(e.target.value)}
        />
        <input
          type="date"
          value={date}
          required
          onChange={e => setDate(e.target.value)}
        />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}
