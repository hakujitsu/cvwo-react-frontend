import React from 'react';
import deletes from '../../../svgs/delete.svg';
import edit from '../../../svgs/edit.svg';
import { ITag } from '../../../redux/tasks/types'
import { Button, Modal, Form, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

type Props =  {
    tag:ITag
    editTag: (newname:string, index:string) => void
    deleteTag: (index:string) => void
};

type State = {
    showDeleteModal: boolean,
    showEditModal: boolean,
    editTagName: string,
}

export class IndivTag extends React.Component<Props, State>  {
    constructor(props:Props){
        super(props)
        this.state = { 
            showDeleteModal: false,
            showEditModal: false,
            editTagName: "",
        }
    }

    deleteTag(id:string){
        // ADD LATER 
        this.props.deleteTag(id);
    }

    editTagNameInput(input:string){
        this.setState({editTagName: input});
    }

    editTag(id:string){
        // ADD LATER
        this.props.editTag(this.state.editTagName, id);
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
            showEditModal,
        } = this.state

        return (
            <div>
                <div className = "indivtag">
                    {/* TAG NAME */}
                    <span className = "tagname">{this.props.tag.name}</span>

                    {/* DELETE BUTTON */}
                    <Modal onClose={this.closeModal} open={showDeleteModal} size={"mini"} 
                    trigger={<img onClick={() => this.setState({ showDeleteModal: true })} className = "delete" src = {deletes} alt=""/>}>
                        <Modal.Header>Delete Task</Modal.Header>
                        <Modal.Content>
                            <p>Are you sure you want to delete this tag?</p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button negative onClick={() => {this.closeModal()}}>No</Button>
                            <Button positive onClick={() => {this.deleteTag(this.props.tag.id); this.closeModal()}}>Yes</Button>
                        </Modal.Actions>
                    </Modal>

                    {/* EDIT BUTTON */}
                    <Modal onClose={this.closeModal} open={showEditModal} size={"small"} 
                    trigger={<img onClick={() => {this.setState({ showEditModal: true }); 
                                            this.setState({editTagName: this.props.tag.name})}}
                    className = "edit" src = {edit} alt=""/>}>
                        <Modal.Header>Edit Task</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <Form>
                                    <Form.Field >
                                        <div><strong>Task Name</strong></div>
                                            <input defaultValue={this.props.tag.name}
                                                onChange={(e) => this.editTagNameInput(e.target.value)}/>
                                    </Form.Field> 
                                </Form>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button positive onClick={() => {this.editTag(this.props.tag.id); this.closeModal()}}>Confirm</Button>
                            <Button negative onClick={() => {this.closeModal()}}>Cancel</Button>
                        </Modal.Actions>
                    </Modal>

                </div>
                <hr/>
            </div>
        )
    }
}