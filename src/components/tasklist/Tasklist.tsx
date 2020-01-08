import React from 'react';
import './Tasklist.css';
import { ITask, ITag, ITagOptions } from '../../redux/tasks/types'
import { TaskConnector } from '../containers/GetStore'
import { Button, Modal, Form, Dropdown } from 'semantic-ui-react'


type Props = {
    tags: ITag[]
    tagoptions: ITagOptions[]
}

export const Tasklist: React.FC<Props> = (props:Props) => {
    const { tags, tagoptions } = props;
    console.log(tags);
  
    return (
        <div className = "main">
        <div className = "taskheader">Today</div>

        <div className = "tasklist">
            <TaskConnector/>

            <Modal size={"small"} trigger={<div className = "addtask"> Add task </div>}>
                <Modal.Header>Add Task</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Field>
                                <div><strong>Task Name</strong></div>
                                    <input />
                            </Form.Field>
                            <label><strong>Tags</strong></label>
                            <Dropdown fluid multiple selection options={tagoptions} />
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button positive>Confirm</Button>
                    <Button negative>Cancel</Button>
                </Modal.Actions>
            </Modal>
        </div>
    </div>
    )
}