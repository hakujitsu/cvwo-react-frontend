import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Tasklist from './components/tasklist/Tasklist';


function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
      <div className = "container">
        <Header/>

        <Sidebar/>
        
        <Tasklist/>
        
      </div>


      
    </div>
  );
}

export default App;
