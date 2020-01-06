import React from 'react';
import deletes from '../../svgs/delete.svg';
import edit from '../../svgs/edit.svg';
import './Tasks.css';

const IndivTask = () => (
    <div className = "task">
        <input type = "checkbox"/>
        <span className = "taskname">Do CVWO Task</span>
        <img className = "delete" src = {deletes} alt=""/>
        <img className = "edit" src = {edit} alt=""/>
        <hr/>
    </div>
)

export default IndivTask



