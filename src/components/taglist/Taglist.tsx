import React from 'react';
import deletes from '../../svgs/delete.svg';
import edit from '../../svgs/edit.svg';
import './Taglist.css';

type Props = {
    
}

type State = {
    
}



export class Taglist extends React.Component<Props, State> {
    render() {
      return (
        <div className = "main">
        <div className = "tagheader">Tags</div>

        <div className = "taglist">
            <div className = "indivtag">
                <span className = "tagname">Do CVWO Task</span>
                <img className = "delete" src = {deletes} alt=""/>
                <img className = "edit" src = {edit} alt=""/>
            </div>
            <hr/>
            <div className = "indivtag">
                <span className = "tagname">Sleep</span>
                <img className = "delete" src = {deletes} alt=""/>
                <img className = "edit" src = {edit} alt=""/>
            </div>
            <hr/>
            <div className = "addtags">
                Add tag
            </div>
        </div>
    </div>
        );
    }
}

