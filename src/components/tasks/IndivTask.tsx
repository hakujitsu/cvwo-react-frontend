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
    options: ITagOptions[],
    deleteTask: (id:string) => void
};

type State = {
    showDeleteModal: boolean,
    showEditModal: boolean
}

export class IndivTask extends React.Component<Props, State>  {
    constructor(props:Props){
        super(props)
        this.state = {
            showDeleteModal: false,
            showEditModal: false
        }
    }

    deleteTask(id:string){
        this.props.deleteTask(id);
        
    }

    closeModal = () => {
        this.setState({ 
            showDeleteModal: false,
            showEditModal: false 
        })
    }

    render(){
        const {
            showDeleteModal,
            showEditModal
        } = this.state

        return (
            <div className = "task">
                <div>
                    <input type = "checkbox"/>
                    <span className = "taskname">{this.props.task.name}</span>
    
                    {/* DELETE BUTTON */}
                    <div className = "delete">
                        <Modal onClose={this.closeModal} open={showDeleteModal} size={"mini"} 
                        trigger={<img onClick={() => this.setState({ showDeleteModal: true })} className = "delete" src = {deletes} alt=""/>}>
                            <Modal.Header>Delete Task</Modal.Header>
                            <Modal.Content>
                                <p>Are you sure you want to delete this task?</p>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button negative onClick={() => {this.closeModal()}}>No</Button>
                                <Button positive onClick={() => {this.deleteTask(this.props.task.id); this.closeModal()}}>Yes</Button>
                            </Modal.Actions>
                        </Modal>
                    </div>
    
                    {/* EDIT BUTTON */}
                    <Modal onClose={this.closeModal} open={showEditModal} size={"small"} 
                    trigger={<img onClick={() => this.setState({ showEditModal: true })}className = "edit" src = {edit} alt=""/>}>
                    <Modal.Header>Edit Task</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Form>
                                <Form.Field >
                                    <div><strong>Task Name</strong></div>
                                        <input defaultValue={this.props.task.name}/>
                                </Form.Field>
                                <div><strong>Tags</strong></div>
                                <Dropdown fluid multiple selection options={this.props.options} />
                                {/* ADD DEFAULT VALUE */}
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button positive onClick={() => {this.closeModal()}}>Confirm</Button>
                        <Button negative onClick={() => {this.closeModal()}}>Cancel</Button>
                    </Modal.Actions>
                </Modal>
    
                </div>
                <div>
                {
                    this.props.task.tag.map((tag: string, index: number) => {
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

}


export default IndivTask



