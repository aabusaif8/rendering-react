import React from 'react';
import './Activity.css'
function Activity({ time, description }) {
  return (
    <div className="activity">
      <p>{time}</p>
      <p>{description}</p>
    </div>
  );
}

export default Activity;

