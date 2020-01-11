import React from 'react';
import { ITag } from '../../../redux/tasks/types'
import { IndivTag } from './IndivTag'
import '../Taglist.css';

type Props = {
    tags:ITag[]
    editTag: (editname:string, editcolor:string, index:string) => void
    deleteTag: (index:string, name:string) => void
}

export const Tags: React.FC<Props> = (props:Props) => {
    const { tags, editTag, deleteTag } = props;
    return (
        <div>
            {
                tags.map((tag: ITag, index: number) =>
                    <IndivTag key = {index} tag={tag} editTag={editTag} deleteTag={deleteTag}/>
                )
            }
        </div>
    )
}