import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'

function App() {
  let currentPage = "SHOP"
  return (
    <div className="App">
      <NavBar currentPage={currentPage}/>
    </div>
  );
}

export default App;
