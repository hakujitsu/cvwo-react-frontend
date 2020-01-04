import React from 'react';
import all from '../../svgs/all.svg';
import today from '../../svgs/today.svg';
import thisweek from '../../svgs/thisweek.svg';
import './Sidebar.css';

class Sidebar extends React.Component {
    render() {
      return (
        <div className = "sidebar">
            <div className = "default_sidebar">
                <div className = "default_options">
                    <img className = "icon" src ={all} alt=""></img>
                    <span className = "sb">All</span>
                </div>
                
                <div className = "default_options">
                    <img className = "icon" src = {today} alt=""></img>
                    <span className = "sb">Today</span>
                </div>

                <div className = "default_options">
                    <img className = "icon" src = {thisweek} alt=""></img>
                    <span className = "sb">This Week</span>
                </div>

            </div>
    
            <div className = "sidebar_tags">
                <div className = "sb_tag_title">
                    <strong>Tags</strong>
                </div>
                <hr/>
                <div className = "sbtag">
                    <div className="circle"></div>
                    Important
                </div>
                <div className = "sbtag">
                    <div className="circle"></div>
                    Work
                </div>
            </div>
        </div>
        );
    }
}

export default Sidebar;