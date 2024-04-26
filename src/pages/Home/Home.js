// HomePage.js

import React from 'react';
import './Home.css'; // Import the CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <h1></h1>
      <div className="card-container">
        <div className="card">
          <h2>UNINP Art Course</h2>
          <p>The UNINP Art Course is a comprehensive program designed to nurture creativity and artistic skills in individuals.</p>
          <button>Peek at this course</button>
        </div>
        <div className="card">
          <h2>UNINP Coding Course</h2>
          <p>The UNINP Coding Course offers comprehensive training in programming languages and software development</p>
          <button>Peek at this course</button>
        </div>
        <div className="card">
          <h2>UNINP Digital Marketing Course</h2>
          <p>
          UNINP's Digital Marketing Course offers essential skills and strategies for success in the digital marketing industry.</p>
          <button><a href='/login'>Peek at this course</a></button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
