import React from 'react';
import deletes from '../../../svgs/delete.svg';
import edit from '../../../svgs/edit.svg';
import { ITag, IDropdownOptions } from '../../../redux/types'
import { Button, Modal, Form, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../Taglist.css';

type Props =  {
    tag:ITag
    editTag: (editname:string, editcolor:string, index:string) => void
    deleteTag: (index:string, name:string) => void
};

type State = {
    showDeleteModal: boolean,
    showEditModal: boolean,
    editTagName: string,
    editTagColor: string,
    tagcolors: IDropdownOptions[]
}

export class IndivTag extends React.Component<Props, State>  {
    constructor(props:Props){
        super(props)
        this.state = { 
            showDeleteModal: false,
            showEditModal: false,
            editTagName: "",
            editTagColor: "",
            tagcolors:[
                {
                    key: "Red",
                    text: "Red",
                    value: "#DC9393"
                },
                {
                    key: "Pink",
                    text: "Pink",
                    value: "#FFCECE"
                },
                {
                    key: "Purple",
                    text: "Purple",
                    value: "#E0B9F5"
                },
                {
                    key: "Yellow",
                    text: "Yellow",
                    value: "#ECED9D"
                },
                {
                    key: "Green",
                    text: "Green",
                    value: "#A8D8A5"
                },
                {
                    key: "Blue",
                    text: "Blue",
                    value: "#93D1DC"
                }, 
            ]
        }
    }

    deleteTag(id:string, name:string){
        // ADD LATER 
        this.props.deleteTag(id, name);
    }

    editTagNameInput(input:string){
        this.setState({editTagName: input});
    }

    editTagColorInput(color:any){
        this.setState({editTagColor: color.value});
    }

    editTag(id:string){
        this.props.editTag(this.state.editTagName, this.state.editTagColor, id);
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
                    <div className="circle" style={{backgroundColor: this.props.tag.colour}}></div>
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
                            <Button positive onClick={() => {this.deleteTag(this.props.tag.id, this.props.tag.name); 
                                this.closeModal()}}>Yes</Button>
                        </Modal.Actions>
                    </Modal>

                    {/* EDIT BUTTON */}
                    <Modal onClose={this.closeModal} open={showEditModal} size={"tiny"} 
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
                                    <label><strong>Colour</strong></label>
                                    <Dropdown onChange={(e, { value }) => this.editTagColorInput({value})}
                                    fluid selection options={this.state.tagcolors} />
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