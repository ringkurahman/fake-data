import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <Users></Users>
      </header>
    </div>
  );
}

export default App;
