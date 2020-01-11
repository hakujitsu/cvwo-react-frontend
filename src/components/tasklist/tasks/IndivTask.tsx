import React from 'react'
import edit from '../../../svgs/edit.svg'
import deletes from '../../../svgs/delete.svg'
import './Tasks.css'
import { ITask, IDropdownOptions } from '../../../redux/tasks/types'
import IndivTag from './IndivTag'
import { Button, Modal, Form, Dropdown, Checkbox } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

type Props =  {
    task: ITask,
    options: IDropdownOptions[],
    deleteTask: (id:string) => void,
    editTask: (newname:string, newtag:string[], index:string) => void,
    toggleTask: (index:string) => void
};

type State = {
    showDeleteModal: boolean,
    showEditModal: boolean,
    editTaskName: string,
    editTaskTags: string[]
}

export class IndivTask extends React.Component<Props, State>  {
    constructor(props:Props){
        super(props)
        this.state = {
            showDeleteModal: false,
            showEditModal: false,
            editTaskName: "",
            editTaskTags: []    
        }
    }

    toggleTask(id:string){
        this.props.toggleTask(id);
    }

    deleteTask(id:string){
        this.props.deleteTask(id);
    }

    initialiseEditTaskNameModal(name:string){
        this.setState({editTaskName: name});
        return name;
    }

    editTaskNameInput(input:string){
        this.setState({editTaskName: input});
    }

    editTaskTagInput(tags:any){
        let newtags:string[] = [];
        for(let i = 0; i < tags.value.length; i++){
            newtags.push(tags.value[i]);
        }
        this.setState({editTaskTags: newtags});
    }

    editTask(id:string){
        this.props.editTask(this.state.editTaskName, this.state.editTaskTags, id);
    }

    closeModal = () => {
        this.setState({ 
            showDeleteModal: false,
            showEditModal: false,
            editTaskName: "",
            editTaskTags: []
        })
    }

    render(){
        const {
            showDeleteModal,
            showEditModal,
        } = this.state

        return (
            <div className = "task">
                <div>
                    {/* CHECKBOX AND TASK NAME */}
                    <Checkbox label={this.props.task.name} defaultChecked={this.props.task.done}
                    onChange={() => this.toggleTask(this.props.task.id)}/>
    
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
                    trigger={<img onClick={() => {this.setState({ showEditModal: true }); 
                                            this.setState({editTaskName: this.props.task.name});
                                            this.setState({editTaskTags: this.props.task.tag})}}
                    className = "edit" src = {edit} alt=""/>}>
                        <Modal.Header>Edit Task</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <Form>
                                    <Form.Field >
                                        <div><strong>Task Name</strong></div>
                                            <input defaultValue={this.props.task.name}
                                                onChange={(e) => this.editTaskNameInput(e.target.value)}/>
                                    </Form.Field>
                                    <div><strong>Tags</strong></div>
                                    <Dropdown defaultValue={this.props.task.tag} 
                                        fluid multiple selection options={this.props.options} 
                                        onChange={(e, { value }) => this.editTaskTagInput({value})}/> 
                                </Form>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button positive onClick={() => {this.editTask(this.props.task.id); this.closeModal()}}
                            disabled={!this.state.editTaskName}>Confirm</Button>
                            <Button negative onClick={() => {this.closeModal()}}>Cancel</Button>
                        </Modal.Actions>
                    </Modal>
    
                </div>

                {/* TASK TAGS */}
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



