import { connect } from 'react-redux'
import { TaskActionTypes, TaskTagListState, ITask } from '../../redux/tasks/types'
import { SidebarTagList } from '../taglist/SidebarTagList'
import { Tasks } from '../tasks/Tasks'
import { Tasklist } from '../tasklist/Tasklist'
import { addTodo, deleteTodo } from '../../redux/tasks/actions';


// Describes how to transform the current Redux store state into 
// the props you want to pass to a presentational component you are wrapping
const mapStateToProps = (state: {taskReducer: TaskTagListState}) => void console.log({
    state}) || ({
    tasks: state.taskReducer.tasks,
    tags: state.taskReducer.tags,
    tagoptions: state.taskReducer.tagoptions
})

const mapDispatchToProps = {
    addTask: addTodo,
    deleteTask: deleteTodo
}

export const TaskConnector = connect(mapStateToProps, mapDispatchToProps)(Tasks)
export const TasklistConnector = connect(mapStateToProps, mapDispatchToProps)(Tasklist)
export const SidebarTagConnector = connect(mapStateToProps, mapDispatchToProps)(SidebarTagList)


/* Things I should connect to with this 
- Tag Page (to be added)

*/




