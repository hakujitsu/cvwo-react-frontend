import React from 'react';
import './Taglist.css';
import { ITag } from '../../redux/tasks/types'
import { Tags } from './tags/Tags'
import { Button, Modal, Form, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

type Props = {
    tags: ITag[]
    addTag: (newname:string) => void
    editTag: (newname:string, index:string) => void
    deleteTag: (index:string, name:string) => void
}

type State = {
    showModal: boolean
    newTagName: string
}

export class Taglist extends React.Component<Props, State> {
    constructor(props:Props){
        super(props)
        this.state = {
            showModal: false,
            newTagName: "",
        }
    }

    closeModal = () => {
        this.setState({ showModal: false })
    }

    newTagNameInput(input:string){
        this.setState({newTagName: input});
    }

    createTag(){
        this.props.addTag(this.state.newTagName);
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
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button positive onClick={() => {this.closeModal(); this.createTag()}}>Confirm</Button>
                    <Button negative onClick={() => this.closeModal()}>Cancel</Button>
                </Modal.Actions>
            </Modal>
        </div>
    </div>
        );
    }
}

