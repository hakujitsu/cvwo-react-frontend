import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import deletes from '../../../svgs/delete.svg'

class DeleteTask extends Component {
  render() {
    return (
      <div>
        <Modal size={"mini"} trigger={<img className = "delete" src = {deletes} alt=""/>}>
          <Modal.Header>Delete Task</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete this task?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative>No</Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Yes"
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default DeleteTask;