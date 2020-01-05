import React from 'react';
import deletes from '../../svgs/delete.svg';
import edit from '../../svgs/edit.svg';
import './Tasks.css';

class Tasks extends React.Component {
    render() {
      return (
        <div>
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
        </div>
            
        );
    }
}

export default Tasks;