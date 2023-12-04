import React from 'react';
import "./HobbyList.css"

function HobbyList({ hobbies }) {
  return (
    <div className="hobby-list">
      {hobbies.length > 0 ? (
        <>
          <h2>Hobbies</h2>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

export default HobbyList;