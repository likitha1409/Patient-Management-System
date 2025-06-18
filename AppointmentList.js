import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentList = () => {
  const appointments = [
    { id: 1, doctor: "Dr. A", date: "2025-06-20", patient: "Alice" },
    { id: 2, doctor: "Dr. B", date: "2025-06-21", patient: "Bob" },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>All Appointments</h2>
      <ul>
        {appointments.map((a) => (
          <li key={a.id}>
            {a.date} - {a.doctor} with {a.patient}
            <Link to={`/appointments/details/${a.id}`} style={{ marginLeft: '10px' }}>
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
