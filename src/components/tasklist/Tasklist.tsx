import React from 'react';
import './Tasklist.css';
import Connector from '../containers/GetTasks'

class Tasklist extends React.Component {
    render() {
      return (
        <div className = "main">
        <div className = "taskheader">Today</div>

        <div className = "tasklist">
            <Connector/>
            <div className = "addtask">
                Add task
            </div>
        </div>
    </div>
        );
    }
}

export default Tasklist;