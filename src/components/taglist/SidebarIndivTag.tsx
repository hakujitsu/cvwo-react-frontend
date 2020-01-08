import React from 'react';
import '../sidebar/Sidebar.css';
import {ITag} from '../../redux/tasks/types'

type Props = ITag;

const IndivTag:React.FC<Props> = (props:Props) => {
    return (
        <div>
            <div className = "sbtag">
                <div className="circle"></div>
                    {props.name}
            </div>  
        </div>
    )
}

export default IndivTag
