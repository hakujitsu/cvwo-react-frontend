import React from 'react';
import '../Sidebar.css'
import {ITag} from '../../../redux/types'
import { Tags } from '../../taglist/tags/Tags';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

type Props = ITag;

const IndivTag:React.FC<Props> = (props:Props) => {
    return (
        <div>
            <div className = "sbtag">
                <div className="circle" style={{backgroundColor: props.colour}}></div>
                    <Link to={'/tag/' + `${props.name}`}>
                        {props.name}
                    </Link>
            </div>  
        </div>
    )
}

export default IndivTag
