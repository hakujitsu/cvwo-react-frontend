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
const uuidv1 = require('uuid/v1');


//INITIAL STATE
const initialState:TaskTagListState = {
    tasks: [
        {
            name: "Do CVWO Task",
            done: true,
            tag: ["Important", "Work"],
            id: 'eaeab160-3349-11ea-8b0c-7f6b133ca2e0'
        },
        {
            name: "Play Celeste",
            done: false,
            tag: ["Important"],
            id: 'eaeab161-3349-11ea-8b0c-7f6b133ca2e0'
            
        },
        {
            name: "Sleep",
            done: false,
            tag: [],
            id: 'eaead870-3349-11ea-8b0c-7f6b133ca2e0'
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
                let newTask:ITask = {
                    name: action.newname,
                    done: false,
                    tag: action.newtag,
                    id: uuidv1(),
                }
                return {
                    tasks: [...state.tasks, newTask],
                    tags: state.tags,
                    tagoptions: state.tagoptions
                }
            case DELETE_TODO:
                return {
                    tasks: state.tasks.filter(task => task.id != action.id),
                    tags: state.tags,
                    tagoptions: state.tagoptions
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



