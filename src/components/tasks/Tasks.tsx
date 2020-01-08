import React from 'react';
import './Tasks.css';
import { ITask, ITagOptions } from '../../redux/tasks/types'
import IndivTask from './IndivTask';

type Props = {
    tasks: ITask[];
    tagoptions: ITagOptions[];
}

export const Tasks: React.FC<Props> = (props:Props) => {
    const { tasks, tagoptions } = props;
    return (
        <div>     
            {
                tasks.map((task: ITask, index: number) =>
                    <IndivTask key = {index} task={task} options={tagoptions}/>
            )}
        </div>
    )
}