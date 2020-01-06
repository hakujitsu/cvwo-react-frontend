import { connect } from 'react-redux'
import { ITask, TaskListState } from '../../redux/tasks/types'
import { Tasks } from '../tasks/Tasks'

// Describes how to transform the current Redux store state into 
// the props you want to pass to a presentational component you are wrapping
const mapStateToProps = (state:TaskListState) => ({
    tasks: state.tasks
})

// For actions to get back to the state, to edit l8r
const mapDispatchToProps = {
      // Check the tutorial folks (redux pages)
}

export const Connector = connect(mapStateToProps, mapDispatchToProps)(Tasks)



