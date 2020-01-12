import React from 'react';
import './Taglist.css';
import { ITag, IDropdownOptions } from '../../redux/types'
import { Tags } from './tags/Tags'
import { Button, Modal, Form, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

type Props = {
    tags: ITag[]
    addTag: (newname:string, newcolour:string) => void
    editTag: (editname:string, editcolor:string, index:string) => void
    deleteTag: (index:string, name:string) => void
}

type State = {
    showModal: boolean
    newTagName: string
    newTagColor: string
    tagcolors: IDropdownOptions[]
}

export class Taglist extends React.Component<Props, State> {
    constructor(props:Props){
        super(props)
        this.state = {
            showModal: false,
            newTagName: "",
            newTagColor: "",
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

    closeModal = () => {
        this.setState({ showModal: false })
        this.setState({newTagName: ""});
        this.setState({newTagColor: ""});
    }

    newTagNameInput(input:string){
        this.setState({newTagName: input});
    }

    newTagColorInput(color:any){
        this.setState({newTagColor: color.value});
    }

    createTag(){
        this.props.addTag(this.state.newTagName, (this.state.newTagColor));
    }

    render() {
        const {
            showModal,
        } = this.state
        
        return (
        <div className = "main">
        <div className = "tagheader">Tags</div>

        <div className = "taglist">
            <Tags tags={this.props.tags} deleteTag={this.props.deleteTag} editTag={this.props.editTag}/>

            <Modal onClose={this.closeModal} open={showModal} size={"tiny"} 
            trigger={<div className = "addtags" onClick={() => this.setState({ showModal: true })}> Add tag </div>}>
                <Modal.Header>Add Tag</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Field>
                                <div><strong>Tag Name</strong></div>
                                    <input onChange={(e) => this.newTagNameInput(e.target.value)} />
                            </Form.Field>
                            <label><strong>Colour</strong></label>
                            <Dropdown onChange={(e, { value }) => this.newTagColorInput({value})}
                            fluid selection options={this.state.tagcolors} />
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button positive onClick={() => {this.closeModal(); this.createTag()}}
                    disabled={!this.state.newTagName || !this.state.newTagColor}>Confirm</Button>
                    <Button negative onClick={() => this.closeModal()}>Cancel</Button>
                </Modal.Actions>
            </Modal>
        </div>
    </div>
        );
    }
}

