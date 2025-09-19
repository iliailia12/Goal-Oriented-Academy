import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="card-container">
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default App;
