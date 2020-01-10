import React from 'react';
import {ITag} from '../../redux/tasks/types'
import '../sidebar/Sidebar.css';
import IndivTag from './SidebarIndivTag'

type Props = {
    tags: ITag[];
}

export const SidebarTagList: React.FC<Props> = (props:Props) => {
    const { tags } = props;
    return (
        <div className = "sidebar_tags">
            <div className = "sb_tag_title">
                <strong>Tags</strong>
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

