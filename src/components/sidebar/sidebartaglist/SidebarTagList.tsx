import React from 'react';
import {ITag} from '../../../redux/tasks/types'
import '../Sidebar.css';
import IndivTag from './SidebarIndivTag'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

type Props = {
    tags: ITag[];
}

export const SidebarTagList: React.FC<Props> = (props:Props) => {
    const { tags } = props;
    return (
        <div className = "sidebar_tags">
            <div className = "sb_tag_title">
                <strong><Link to="/tags">Tags</Link></strong>
            </div>
            <hr/>
            {
                tags.map((tag: ITag, index: number) =>
                    <IndivTag key = {index} {...tag}/>
                )
            }

        </div>
    )
}

