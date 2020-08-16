import React from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import About from './components/about'
import Experience from './components/experience';
import Education from './components/education';
import Skills from './components/skills';
import Interests from './components/interests';
import Awards from './components/awards';

function App() {
  return (
    <div id="parent">
      <Sidebar></Sidebar>
      <div className="container-fluid p-0">
        <About></About>
        <Experience></Experience>
        <Education></Education>
        <Skills></Skills>
        <Interests></Interests>
        <Awards></Awards>
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload. It works!
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
