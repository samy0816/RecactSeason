import React, { useState, useEffect } from 'react';
import './App.css';
// Import images for each month
import JanuaryEarth from './Earth1.png';
import FebruaryEarth from './Earth2.png';
import MarchEarth from './Earth3.png';
import AprilEarth from './Earth4.png';
import MayEarth from './Earth5.png';
import JuneEarth from './Earth6.png';
import JulyEarth from './Earth7.png';
import AugEarth from './Earth8.png';
import SeptEarth from './Earth9.png';
import OctEarth from './Earth10.png';
import NovEarth from './Earth11.png';
import DecEarth from './Earth12.png';

// Repeat for all months...

function App() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const monthImages = [
    JanuaryEarth,
    FebruaryEarth,
    MarchEarth,
    AprilEarth,
    MayEarth,
    JuneEarth,
    JulyEarth,
    AugEarth,
    SeptEarth,
    OctEarth,
    NovEarth,
    DecEarth
    
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      selectNextMonth();
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentMonthIndex]);

  const selectNextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % 12);
  };

  return (
    <div className="container">
      <div className="title">Earth and Months</div>
      <div className="home-button">Home</div>
      <div className="earth-container">
        <img src={monthImages[currentMonthIndex]} alt="Earth" className="earth" />
        <div className="months-circle">
          {months.map((month, index) => (
            <div
              key={index}
              className={`month ${currentMonthIndex === index ? 'selected' : ''}`}
              style={{
                transform: `translate(-50%, -50%) rotate(${index * (360 / 12)}deg) translate(300px)`,
              }}
            ></div>
          ))}
        </div>
        <div className="selected-month">{months[currentMonthIndex]}</div>
      </div>
    </div>
  );
}

export default App;
