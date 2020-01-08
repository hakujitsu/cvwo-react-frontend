import React from 'react';
import edit from '../../svgs/edit.svg';
import './Tasks.css';
import { ITask, ITagOptions, ITag } from '../../redux/tasks/types'
import IndivTag from './IndivTag'

import { Button, Modal, Form, Dropdown } from 'semantic-ui-react'
import deletes from '../../svgs/delete.svg'
import 'semantic-ui-css/semantic.min.css';

type Props =  {
    task: ITask,
    options: ITagOptions[];
};

const IndivTask:React.FC<Props> = (props:Props) => {
    const { task, options } = props;
    return (
        <div className = "task">
            <div>
                <input type = "checkbox"/>
                <span className = "taskname">{task.name}</span>

                {/* DELETE BUTTON */}
                <div className = "delete">
                    <Modal size={"mini"} trigger={<img className = "delete" src = {deletes} alt=""/>}>
                        <Modal.Header>Delete Task</Modal.Header>
                        <Modal.Content>
                            <p>Are you sure you want to delete this task?</p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button negative>No</Button>
                            <Button positive>Yes</Button>
                        </Modal.Actions>
                    </Modal>
                </div>

                {/* EDIT BUTTON */}
                <Modal size={"small"} trigger={<img className = "edit" src = {edit} alt=""/>}>
                <Modal.Header>Edit Task</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Field >
                                <div><strong>Task Name</strong></div>
                                    <input defaultValue={task.name}/>
                            </Form.Field>
                            <div><strong>Tags</strong></div>
                            <Dropdown fluid multiple selection options={options} />
                            {/* ADD DEFAULT VALUE */}
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button positive>Confirm</Button>
                    <Button negative>Cancel</Button>
                </Modal.Actions>
            </Modal>




            </div>
            <div>
            {
                task.tag!.map((tag: string, index: number) => {
                    return (
                        <IndivTag key = {index} tagname={tag}/>   
                    )}
                )
            }
            </div>
            <hr/>
        </div>
    )
}

export default IndivTask



