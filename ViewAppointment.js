// src/views/Appointments/ViewAppointment.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewAppointment = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    // Simulate fetching appointment data
    const fetchAppointment = async () => {
      // Replace with actual API call
      const data = {
        id,
        patientName: 'John Doe',
        doctorName: 'Dr. Smith',
        date: '2025-06-20',
        time: '10:00 AM',
        reason: 'Routine check-up'
      };
      setAppointment(data);
    };

    fetchAppointment();
  }, [id]);

  if (!appointment) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>View Appointment</h2>
      <p><strong>ID:</strong> {appointment.id}</p>
      <p><strong>Patient Name:</strong> {appointment.patientName}</p>
      <p><strong>Doctor Name:</strong> {appointment.doctorName}</p>
      <p><strong>Date:</strong> {appointment.date}</p>
      <p><strong>Time:</strong> {appointment.time}</p>
      <p><strong>Reason:</strong> {appointment.reason}</p>
    </div>
  );
};

export default ViewAppointment;
