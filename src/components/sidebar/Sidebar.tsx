import React from 'react';
import all from '../../svgs/all.svg';
import today from '../../svgs/today.svg';
import thisweek from '../../svgs/thisweek.svg';
import './Sidebar.css';
import  { SidebarTagConnector } from '../containers/GetStore';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class Sidebar extends React.Component {
    render() {
      return (
        <div className = "sidebar">
            <div className = "default_sidebar">
                <div className = "default_options">
                    <Link to="/">
                    <img className = "icon" src ={all} alt=""></img>
                    <span className = "sb">All</span>
                    </Link>
                </div>
                
                {/* <div className = "default_options">
                    <img className = "icon" src = {today} alt=""></img>
                    <span className = "sb">Today</span>
                </div>

                <div className = "default_options">
                    <img className = "icon" src = {thisweek} alt=""></img>
                    <span className = "sb">This Week</span>
                </div> */}

            </div>
            <SidebarTagConnector/>
        </div>
        );
    }
}

export default Sidebar;