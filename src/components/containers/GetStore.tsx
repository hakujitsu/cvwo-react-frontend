import { connect } from 'react-redux'
import { TaskTagListState } from '../../redux/types'
import { SidebarTagList } from '../sidebar/sidebartaglist/SidebarTagList'
import { Tasklist } from '../tasklist/Tasklist'
import { FilteredTasklist } from '../tasklist/FilteredTasklist'
import { Taglist } from '../taglist/Taglist'
import { addTodo, deleteTodo, editTodo, toggleTodo, addTag, editTag, deleteTag } from '../../redux/actions';

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
    toggleTask: toggleTodo,
    addTag: addTag,
    editTag: editTag,
    deleteTag: deleteTag
}

export const TasklistConnector = connect(mapStateToProps, mapDispatchToProps)(Tasklist)
export const FilteredTasklistConnector = connect(mapStateToProps, mapDispatchToProps)(FilteredTasklist)

export const SidebarTagConnector = connect(mapStateToProps, mapDispatchToProps)(SidebarTagList)

export const TaglistConnector = connect(mapStateToProps, mapDispatchToProps)(Taglist)

/* Things I should connect to with this 
- Tag Page (to be added)
*/




