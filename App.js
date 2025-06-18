// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Public Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

// Protected Views
import Dashboard from './views/Dashboard';
import AddPatient from './views/AddPatient';
import ViewBills from './views/ViewBills';

// Doctor Section (without DoctorProfile)
import AddDoctor from './views/Doctor/AddDoctor';
import EditDoctor from './views/Doctor/EditDoctor';
import AssignDepartment from './views/Doctor/AssignDepartment';
import ShiftManagement from './views/Doctor/ShiftManagement';

// Appointments
import BookAppointment from './views/Appointments/BookAppointment';
import ViewAppointment from './views/Appointments/ViewAppointment';
import EditAppointment from './views/Appointments/EditAppointment';
import AppointmentsHome from './views/Appointments/AppointmentsHome';

// Specialists
import Cardiologist from './views/Specialists/Cardiologist';
import Neurologist from './views/Specialists/Neurologist';
import Dermatologist from './views/Specialists/Dermatologist';
import Orthopedic from './views/Specialists/Orthopedic';
import Specialists from './views/Specialists/Specialists';

// Layout and Auth
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

        {/* Specialists */}
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/specialist/cardiologist" element={<Cardiologist />} />
        <Route path="/specialist/neurologist" element={<Neurologist />} />
        <Route path="/specialist/dermatologist" element={<Dermatologist />} />
        <Route path="/specialist/orthopedic" element={<Orthopedic />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-patient" element={<AddPatient />} />
          <Route path="/view-bills" element={<ViewBills />} />

          {/* Doctor Routes */}
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/edit-doctor/:id" element={<EditDoctor />} />
          <Route path="/assign-department" element={<AssignDepartment />} />
          <Route path="/shift-management" element={<ShiftManagement />} />
          {/* DoctorProfile route removed */}

          {/* Appointments */}
          <Route path="/appointments" element={<AppointmentsHome />} />
          <Route path="/appointments/book" element={<BookAppointment />} />
          <Route path="/appointments/view" element={<ViewAppointment />} />
          <Route path="/appointments/edit/:id" element={<EditAppointment />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
