import React from 'react';
import './Tasklist.css';
import { ITask, ITag, ITagOptions } from '../../redux/tasks/types'
import { TaskConnector } from '../containers/GetStore'
import { Button, Modal, Form, Dropdown } from 'semantic-ui-react'

type Props = {
    tags: ITag[]
    tagoptions: ITagOptions[]
    addTask: Function
}

type State = {
    showModal: boolean
}

export class Tasklist extends React.Component<Props, State>  {
    constructor(props:Props){
        super(props)
        this.state = {
            showModal: false
        }
    }

    // confirmTask = () ={

    // }

    closeModal = () => {
        this.setState({ showModal: false })
    }
    
    render() {
        const {
            showModal
        } = this.state

    return (
        <div className = "main">
        <div className = "taskheader">Today</div>

        <div className = "tasklist">
            <TaskConnector/>

            <Modal onClose={this.closeModal} open={showModal} size={"small"} 
            trigger={<div className = "addtask" onClick={() => this.setState({ showModal: true })}> Add task </div>}>
                <Modal.Header>Add Task</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Field>
                                <div><strong>Task Name</strong></div>
                                    <input />
                            </Form.Field>
                            <label><strong>Tags</strong></label>
                            <Dropdown fluid multiple selection options={this.props.tagoptions} />
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button positive onClick={() => {this.closeModal()}}>Confirm</Button>
                    <Button negative onClick={() => this.closeModal()}>Cancel</Button>
                </Modal.Actions>
            </Modal>
        </div>
    </div>
    )
    }
}