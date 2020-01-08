import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const ModalScrollingExample = () => (
  <Modal trigger={<Button>Add Tag</Button>}>
    <Modal.Header>Add Task</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <p>
          Put form in here
        </p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button positive>Confirm</Button>
      <Button negative>Cancel</Button>
    </Modal.Actions>
  </Modal>
)

export default ModalScrollingExample