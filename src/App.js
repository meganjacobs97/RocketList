import React from 'react';
import './App.css';
// import RocketList from './components/Rocketlist';
import Navbar from './components/Navbar';
import CategoryView from './components/CategoryView';
import Main from "./pages/main";

function App() {
  return (
    <div>
      <Navbar />
      {/* <RocketList /> */}
      <CategoryView />
      <Main />
    </div>
  );
}

export default App;
