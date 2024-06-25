import React from 'react';
import './Landing.css';

function Landing() {
  return (
    <div className="landing-grid">
      <div className="box1">
        <h1>Hello, I'm Emma Rout.</h1>
      </div>
      <div className="box2">
        <p>A midwest Chicagoan, mixed media artist. Advocate for self-care and human connection.</p>
      </div>
      <div className="box3">
        <p>↓</p>
      </div>
      <div className="box4">
        {/* This box is left intentionally empty */}
      </div>
    </div>
  );
}

export default Landing;
