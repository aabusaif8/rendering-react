import React from 'react';
import "./Header.css"
function Header({ name, imageSrc, birthday }) {
  return (
    <div className="header">
      <img src={imageSrc} alt={name} />
      <h1>{name}</h1>
      <p>Birthday: {birthday}</p>
    </div>
  );
}

export default Header;
