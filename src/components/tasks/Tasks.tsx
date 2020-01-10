import React from 'react';
import './Tasks.css';
import { ITask, ITagOptions } from '../../redux/tasks/types'
import IndivTask from './IndivTask';

type Props = {
    tasks: ITask[],
    tagoptions: ITagOptions[],
    deleteTask: (id:string) => void,
    editTask: (newname:string, newtag:string[], index:string) => void,
    toggleTask: (index:string) => void
}

export const Tasks: React.FC<Props> = (props:Props) => {
    const { tasks, tagoptions, deleteTask, editTask, toggleTask} = props;
    return (
        <div>     
            {
                tasks.map((task: ITask, index: number) =>
                    <IndivTask key = {index} task={task} options={tagoptions} 
                        deleteTask={deleteTask} editTask={editTask} toggleTask={toggleTask}/>
                )
            }
        </div>
    )
}