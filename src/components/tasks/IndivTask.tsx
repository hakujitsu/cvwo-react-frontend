import React from 'react';
import deletes from '../../svgs/delete.svg';
import edit from '../../svgs/edit.svg';
import './Tasks.css';
import { ITask } from '../../redux/tasks/types'
import IndivTag from './IndivTag'
import DeleteTask from './actions/DeleteTask'

type Props = ITask;

const IndivTask:React.FC<Props> = (props:Props) => {
    return (
        <div className = "task">
            <input type = "checkbox"/>
            <span className = "taskname">{props.name}</span>
            <DeleteTask/>
            <img className = "edit" src = {edit} alt=""/>
            <div>
            {
                props.tag!.map((tag: string, index: number) => {
                    return (
                        <IndivTag key = {index} tagname={tag}/>   
                    )}
                )
            }
            </div>
            <hr/>
        </div>
    )
}

export default IndivTask



