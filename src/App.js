import logo from './logo.svg';
import './App.css';

import React from 'react';
import CloudBackground from './CloudBackground';
const App = () => {
  const numberOfClouds = 3; // Specify the number of clouds you want
  return (
    <div>
      <CloudBackground numberOfClouds={numberOfClouds} />
    </div>
  );
};

export default App;
