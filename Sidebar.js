import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <div style={{
    width: '200px',
    background: '#007bff',
    color: 'white',
    padding: '20px',
    height: '100vh'
  }}>
    <h3 style={{ marginBottom: '20px' }}>🏥 PMS</h3>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      <li style={{ marginBottom: '10px' }}>
        <NavLink 
          to="/dashboard" 
          style={({ isActive }) => ({
            color: 'white',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal'
          })}
        >
          Dashboard
        </NavLink>
      </li>
      <li style={{ marginBottom: '10px' }}>
        <NavLink 
          to="/add-patient" 
          style={({ isActive }) => ({
            color: 'white',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal'
          })}
        >
          Add Patient
        </NavLink>
      </li>
      <li style={{ marginBottom: '10px' }}>
        <NavLink 
          to="/add-doctor" 
          style={({ isActive }) => ({
            color: 'white',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal'
          })}
        >
          Add Doctor
        </NavLink>
      </li>
      <li style={{ marginBottom: '10px' }}>
        <NavLink 
          to="/assign-department" 
          style={({ isActive }) => ({
            color: 'white',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal'
          })}
        >
          Assign Department
        </NavLink>
      </li>
      <li style={{ marginBottom: '10px' }}>
        <NavLink 
          to="/shift-management" 
          style={({ isActive }) => ({
            color: 'white',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal'
          })}
        >
          Shift Management
        </NavLink>
      </li>
      <li style={{ marginBottom: '10px' }}>
        <NavLink 
          to="/appointments" 
          style={({ isActive }) => ({
            color: 'white',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal'
          })}
        >
          Appointments
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/view-bills" 
          style={({ isActive }) => ({
            color: 'white',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal'
          })}
        >
          View Bills
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Sidebar;
