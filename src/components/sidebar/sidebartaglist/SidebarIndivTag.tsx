import React from 'react';
import '../Sidebar.css'
import {ITag} from '../../../redux/tasks/types'
import { Tags } from '../../taglist/tags/Tags';

type Props = ITag;

const IndivTag:React.FC<Props> = (props:Props) => {
    return (
        <div>
            <div className = "sbtag">
                <div className="circle" style={{backgroundColor: props.colour}}></div>
                    {props.name}
            </div>  
        </div>
    )
}

export default IndivTag
