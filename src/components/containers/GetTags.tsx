import { connect } from 'react-redux'
import { TaskTagListState } from '../../redux/tasks/types'
import { SidebarTagList } from '../taglist/SidebarTagList'

// Describes how to transform the current Redux store state into 
// the props you want to pass to a presentational component you are wrapping
const mapStateToProps = (state: {taskReducer: TaskTagListState}) => void console.log({
    state}) || ({
    tags: state.taskReducer.tags
})

// For actions to get back to the state, to edit l8r
const mapDispatchToProps = {
      // Check the tutorial folks (redux pages)
}

export const TagConnector = connect(mapStateToProps, mapDispatchToProps)(SidebarTagList)



