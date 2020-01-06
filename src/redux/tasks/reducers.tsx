import { combineReducers } from 'redux';
import {
    TaskListState,
    TaskActionTypes,
    ITask,
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    DELETE_TODO
} from './types'


//INITIAL STATE
const initialState:TaskListState = {
    tasks: [
        {
            name: "Do CVWO Task",
            done: true,
        },
        {
            name: "Play Celeste",
            done: false,
        },
        {
            name: "Sleep",
            done: false,
        }
    ]
}

//HANDLES ACTIONS MADE TO STATE, RETURNS STATE
export function taskReducer(state = initialState, action: TaskActionTypes)
    : TaskListState {
        switch(action.type){
            case ADD_TODO:
                let newTask:ITask = {
                    name: action.name,
                    done: false
                }
                return {
                    tasks: [...state.tasks, newTask]
                }
            default:
                return state
        }
}

//create another reducer for the filtering, then combine the reducers

const TaskList = combineReducers({
    taskReducer
})

export default TaskList



