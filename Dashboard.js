import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [totalPatients, setTotalPatients] = useState(0);
  const [admittedToday, setAdmittedToday] = useState(0);
  const [dischargedPatients, setDischargedPatients] = useState(0);
  const [pendingAppointments, setPendingAppointments] = useState(0);

  useEffect(() => {
    // Patients
    const patients = JSON.parse(localStorage.getItem("patients")) || [];

    const today = new Date().toISOString().split("T")[0]; // format: YYYY-MM-DD

    const total = patients.length;
    const admitted = patients.filter(p => p.admissionDate === today).length;
    const discharged = patients.filter(p => p.status === "discharged").length;

    setTotalPatients(total);
    setAdmittedToday(admitted);
    setDischargedPatients(discharged);

    // Appointments
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const pending = appointments.filter(a => a.status === "pending").length;
    setPendingAppointments(pending);
  }, []);

  return (
    <div className="dashboard-container">
      <h1>👨‍⚕️ Patient Management Dashboard</h1>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h2>Total Patients</h2>
          <p>{totalPatients}</p>
        </div>
        <div className="dashboard-card">
          <h2>Patients Admitted Today</h2>
          <p>{admittedToday}</p>
        </div>
        <div className="dashboard-card">
          <h2>Discharged Patients</h2>
          <p>{dischargedPatients}</p>
        </div>
        <div className="dashboard-card">
          <h2>Pending Appointments</h2>
          <p>{pendingAppointments}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
