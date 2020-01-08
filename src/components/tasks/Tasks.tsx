import { ITask } from '../../redux/tasks/types'
//p1 imports above

import React from 'react';
import deletes from '../../svgs/delete.svg';
import edit from '../../svgs/edit.svg';
import './Tasks.css';
import './IndivTask';
import IndivTask from './IndivTask';
// p2 imports above

type Props = {
    tasks: ITask[];
}

export const Tasks: React.FC<Props> = (props:Props) => {
    const { tasks } = props;
    return (
        <div>     
            {
                tasks.map((task: ITask, index: number) =>
                    <IndivTask key = {index} {...task}/>
            )}
        </div>
    )
}