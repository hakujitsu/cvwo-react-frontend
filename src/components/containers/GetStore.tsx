import { connect } from 'react-redux'
import { TaskTagListState } from '../../redux/tasks/types'
import { SidebarTagList } from '../sidebar/sidebartaglist/SidebarTagList'
import { Tasks } from '../tasklist/tasks/Tasks'
import { Tasklist } from '../tasklist/Tasklist'
import { Taglist } from '../taglist/Taglist'
import { addTodo, deleteTodo, editTodo, toggleTodo } from '../../redux/tasks/actions';

const mapStateToProps = (state: {taskReducer: TaskTagListState}) => void console.log({
    state}) || ({
    tasks: state.taskReducer.tasks,
    tags: state.taskReducer.tags,
    tagoptions: state.taskReducer.tagoptions
})

const mapDispatchToProps = {
    addTask: addTodo,
    deleteTask: deleteTodo,
    editTask: editTodo,
    toggleTask: toggleTodo
}

export const TaskConnector = connect(mapStateToProps, mapDispatchToProps)(Tasks)
export const TasklistConnector = connect(mapStateToProps, mapDispatchToProps)(Tasklist)
export const SidebarTagConnector = connect(mapStateToProps, mapDispatchToProps)(SidebarTagList)
export const TaglistConnector = connect(mapStateToProps, mapDispatchToProps)(Taglist)

/* Things I should connect to with this 
- Tag Page (to be added)
*/




