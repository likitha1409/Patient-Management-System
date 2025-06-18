import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <header className="home-header">
        <div className="header-content">
          <div>
            <span className="title-3d">Patient Management System</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
