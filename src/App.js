import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home_container from './Containers/Home_container';
import Header_container from './Containers/Header_container';
function App() {
  return (
    <div className="App">
      <Header_container/>
     <Home_container/>
    </div>
  );
}

export default App;
