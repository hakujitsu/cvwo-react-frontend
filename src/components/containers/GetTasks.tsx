import { connect } from 'react-redux'
import { TaskListState } from '../../redux/tasks/types'
// Imported state interface, but tutorial says make one here? check in for errors l8r folks
import Tasks from '../tasks/Tasks'

// Describes how to transform the current Redux store state into 
// the props you want to pass to a presentational component you are wrapping
const mapStateToProps = (state:TaskListState) => {
    return {
        tasks: state.tasks
    }
}

// For actions to get back to the state, to edit l8r
const mapDispatchToProps = {
      // Check the tutorial folks (redux pages)
}

const Connector = connect(mapStateToProps, mapDispatchToProps)(Tasks)

export default Connector
