import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">🏥 HospitalCare</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {/* 🔽 Dropdown for Specialists */}
        <li
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span className="drop-title">Specialists ▼</span>
          {showDropdown && (
            <ul className="dropdown-menu">
              {/* 🔹 New unified link */}
              <li onClick={() => setShowDropdown(false)}>
                <Link to="/specialists">All Specialists</Link>
              </li>
              <li onClick={() => setShowDropdown(false)}>
                <Link to="/specialist/cardiologist">Cardiologist</Link>
              </li>
              <li onClick={() => setShowDropdown(false)}>
                <Link to="/specialist/neurologist">Neurologist</Link>
              </li>
              <li onClick={() => setShowDropdown(false)}>
                <Link to="/specialist/dermatologist">Dermatologist</Link>
              </li>
              <li onClick={() => setShowDropdown(false)}>
                <Link to="/specialist/orthopedic">Orthopedic</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Login / Signup */}
        <li>
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login / Signup
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
