import React from 'react';
import './Tasks.css';

type Props = {
    tagname: string
};

const IndivTag:React.FC<Props> = (props:Props) => {
    return (
            <span className = "tag"> {props.tagname} </span>
    )
}

export default IndivTag



