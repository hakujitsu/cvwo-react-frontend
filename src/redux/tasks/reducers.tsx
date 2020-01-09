import { combineReducers } from 'redux';
import {
    TaskTagListState,
    TaskActionTypes,
    ITask,
    ITag,
    ITagOptions,
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    DELETE_TODO
} from './types'


//INITIAL STATE
const initialState:TaskTagListState = {
    tasks: [
        {
            name: "Do CVWO Task",
            done: true,
            tag: ["Important", "Work"]
        },
        {
            name: "Play Celeste",
            done: false,
            tag: ["Important"]
        },
        {
            name: "Sleep",
            done: false,
            tag: [""]
        }
    ],
    tags: [
        {
            name: "Important"
        },
        {
            name: "Work"
        }
    ],
    tagoptions:[
        {
            key: "Important",
            text: "Important",
            value: "Important"
        },
        {
            key: "Work",
            text: "Work",
            value: "Work"
        },
    ]
}

//HANDLES ACTIONS MADE TO STATE, RETURNS STATE
export function taskReducer(state = initialState, action: TaskActionTypes)
    : TaskTagListState {
        switch(action.type){
            case ADD_TODO:
                return {
                    tasks: [...state.tasks, action.newTask],
                    tags: [],
                    tagoptions: []
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



