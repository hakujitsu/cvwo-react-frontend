import React from 'react';
import './Tasks.css';
import { ITask } from '../../redux/tasks/types'
import IndivTask from './IndivTask';

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