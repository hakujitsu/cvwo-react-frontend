import React from 'react';
import './Tasks.css';
import { ITask, IDropdownOptions } from '../../../redux/types'
import IndivTask from './IndivTask';

type Props = {
    tasks: ITask[],
    tagoptions: IDropdownOptions[],
    tagname: string
    deleteTask: (id:string) => void,
    editTask: (newname:string, newtag:string[], index:string) => void,
    toggleTask: (index:string) => void
}

function tagChecker(task:ITask, tagname:string){
    for(const index in task.tag){
        if(task.tag[index] == tagname){
            return true;
        }
    }
}

export const Tasks: React.FC<Props> = (props:Props) => {
    const { tasks, tagoptions, deleteTask, editTask, toggleTask, tagname } = props;
    console.log("from tasks")
    let renderedTasks = tasks;
    if(tagname !== undefined){
        renderedTasks = tasks.filter(task => tagChecker(task, tagname));
    }
    return (
        <div>     
            {
                renderedTasks.map((task: ITask, index: number) =>
                    <IndivTask key = {index} task={task} options={tagoptions} 
                        deleteTask={deleteTask} editTask={editTask} toggleTask={toggleTask}/>
                )
            }
        </div>
    )
}