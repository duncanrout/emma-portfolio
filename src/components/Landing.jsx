import React from 'react';
import './Landing.css';

function Landing() {

  return (
    <div className="landing-grid">
      <div className="box1">
        <h1>Hello, I'm Emma Rout.</h1>
      </div>
      <div className="box2">
        <p>I'm a midwest Chicagoan, mixed media artist, and an advocate for self-care and human connection. My works include ceramics, prints, digital art, drawing, painting, sculpture, and other combinations of techniques.</p>
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
