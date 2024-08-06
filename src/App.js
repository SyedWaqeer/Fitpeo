import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './dashboard/Dashboard.js';
import './App.css';

function App() {
  return (
    <div >
      <Header />
      <div className="main">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
