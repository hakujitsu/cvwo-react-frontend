import React from 'react';
import './Tasks.css';
import { Label } from 'semantic-ui-react'

type Props = {
    tagname: string
};

const IndivTag:React.FC<Props> = (props:Props) => {
    return (
            <Label className = "tags" size="tiny" circular> {props.tagname} </Label>
    )
}

export default IndivTag



