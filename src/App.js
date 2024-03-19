import React from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Cape Town"/>
    

    <footer> This project was coded by <a href="https://github.com/Palesa-Tsotetsi/react-weather-app-search-engine.git" target="_blank" rel="noreferrer">Palesa Tsotetsi</a> and can be found on <a href="https://github.com/Palesa-Tsotetsi/react-weather-app-search-engine.git" target="_blank" rel="noreferrer">GitHub.</a> </footer>
    </div>
  );
}

export default App;
