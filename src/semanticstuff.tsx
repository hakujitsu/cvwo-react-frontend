// Modal for Deleting tags/tasks
import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";

class ModalExampleSize extends Component {
  render() {
    return (
      <div>
        <Modal size={"mini"} trigger={<Button>Delete button</Button>}>
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

export default ModalExampleSize;


// Modal for Add Task
import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

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
      <Button primary>
        Proceed <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
  </Modal>
)

export default ModalScrollingExample


// Add Task Form

import React from 'react'
import { Form } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' }
]

const FormExampleField = () => (
  <Form>
    <Form.Field>
      <label>Task Name</label>
      <input />
    </Form.Field>
    <div>Tags</div>
    <Dropdown fluid multiple selection options={options} />
  </Form>
  
)

export default FormExampleField


// Tag form
import React from 'react'
import { Form } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'


const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
  }
]

const FormExampleField = () => (
  <Form>
    <Form.Field>
      <label>Tag Name</label>
      <input />
    </Form.Field>
    <div>Color</div>
    <Dropdown placeholder=''
    fluid
    selection
    options={friendOptions}
    />
  </Form>
)

export default FormExampleField





