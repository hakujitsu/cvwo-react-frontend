import React from 'react';
import deletes from '../../svgs/delete.svg';
import edit from '../../svgs/edit.svg';
import './Tasklist.css';

class Tasklist extends React.Component {
    render() {
      return (
        <div className = "main">
        <div className = "taskheader">Today</div>

        <div className = "tasklist">
            <div className = "task">
                <input type = "checkbox"/>
                <span className = "taskname">Do CVWO Task</span>
                <img className = "delete" src = {deletes} alt=""/>
                <img className = "edit" src = {edit} alt=""/>
            </div>
            <hr/>
            <div className = "task">
                <input type = "checkbox"/>
                <span className = "taskname">Play Celeste</span>
                <img className = "delete" src = {deletes} alt=""/>
                <img className = "edit" src = {edit} alt=""/>
                <div className = "tag"> Important </div>
            </div>
            <hr/>
            <div className = "task">
                <input type = "checkbox"/>
                <span className = "taskname">Sleep</span>
                <img className = "delete" src = {deletes} alt=""/>
                <img className = "edit" src = {edit} alt=""/>
            </div>
            <hr/>
            <div className = "addtask">
                Add task
            </div>
        </div>
    </div>
        );
    }
}

export default Tasklist;