import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home_container from './Containers/Home_container';
import Header_container from './Containers/Header_container';
import {SearchBarAction} from './Components/search';
 function App() {
  return (
    <div className="App">
      
      <Header_container/>
     <Home_container/>
     <SearchBarAction />
    </div>
  );
}

export default App;
