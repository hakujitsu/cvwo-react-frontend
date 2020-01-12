import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { TasklistConnector } from './components/containers/GetStore';
import { TaglistConnector } from './components/containers/GetStore'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
      <div className = "container">
        <Header/>

        <Sidebar/>
        
        <Switch>
          <Route exact path="/">
            <TasklistConnector />
          </Route>
          <Route path="/tags">
            <TaglistConnector />
          </Route>
        </Switch>
 
      </div>
 
    </div>
  );
}

export default App;
