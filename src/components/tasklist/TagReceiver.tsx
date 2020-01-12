import React from 'react';
import { FilteredTasklistConnector } from '../containers/GetStore';
import { useParams } from "react-router-dom";

export function TagReceiver(){
    let { tagname } = useParams();  
    let tag = tagname as string  
    console.log(tag);
    return(
        <FilteredTasklistConnector tagname={tag}/>
    )
}