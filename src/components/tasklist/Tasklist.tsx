import React from 'react';
import './Tasklist.css';
import { ITask, ITag, ITagOptions } from '../../redux/tasks/types'
import { TaskConnector } from '../containers/GetStore'
import { Button, Modal, Form, Dropdown } from 'semantic-ui-react'

type Props = {
    tags: ITag[]
    tagoptions: ITagOptions[]
    addTask: (newname:string, newtag: string[]) => void
    // deleteTask: (id:string) => void

}

type State = {
    showModal: boolean
    newTaskName: string
    newTaskTags: string[]
}

export class Tasklist extends React.Component<Props, State>  {
    constructor(props:Props){
        super(props)
        this.state = {
            showModal: false,
            newTaskName: "",
            newTaskTags: []
        }
    }

    closeModal = () => {
        this.setState({ showModal: false })
    }
    
    newTaskNameInput(input:string){
        this.setState({newTaskName: input});
    }

    newTaskTagInput(tags:any){
        console.log(tags);
        let newtags:string[] = [];
        for(let i = 0; i < tags.value.length; i++){
            newtags.push(tags.value[i]);
        }
        this.setState({newTaskTags: newtags});
    }

    createTask(newname:string, newtags:string[]){
        this.props.addTask(newname, newtags);
    }

    render() {
        const {
            showModal,
            newTaskName,
            newTaskTags
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
                                    <input onChange={(e) => this.newTaskNameInput(e.target.value)} />
                            </Form.Field>
                            <label><strong>Tags</strong></label>
                            <Dropdown onChange={(e, { value }) => this.newTaskTagInput({value})}
                            fluid multiple selection options={this.props.tagoptions} />
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button positive onClick={() => {this.closeModal(); this.createTask(newTaskName, newTaskTags)}}>Confirm</Button>
                    <Button negative onClick={() => this.closeModal()}>Cancel</Button>
                </Modal.Actions>
            </Modal>
        </div>
    </div>
    )
    }
}