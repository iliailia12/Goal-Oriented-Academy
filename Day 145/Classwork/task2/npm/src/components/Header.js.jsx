import React from 'react';
import './styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Welcome to My Website</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
