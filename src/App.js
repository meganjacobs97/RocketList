import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import RocketList from './components/Rocketlist';
import Navbar from './components/Navbar';
import CategoryView from './components/CategoryView';

function App() {
  return (
    <div>
      <Navbar />
      {/* <RocketList /> */}
      <CategoryView />
    </div>
  );
}

export default App;
