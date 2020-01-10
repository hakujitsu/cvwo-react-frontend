import { combineReducers } from 'redux';
import {
    TaskTagListState,
    TaskActionTypes,
    TagActionTypes,
    ITask,
    ITag,
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    ADD_TAG,
    DELETE_TAG,
    EDIT_TAG 
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
            name: "Important",
            id: "0e7762f0-338a-11ea-872e-1d7406f7a6ab"
        },
        {
            name: "Work",
            id: "0e778a01-338a-11ea-872e-1d7406f7a6ab"
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
                    tasks: state.tasks.filter(task => task.id !== action.id),
                    tags: state.tags,
                    tagoptions: state.tagoptions
                }
            case EDIT_TODO:
                let editedTask = state.tasks.find(task => task.id === action.id);
                editedTask!.name = action.newname;
                editedTask!.tag = action.newtag;
                return {
                    tasks: state.tasks,
                    tags: state.tags,
                    tagoptions: state.tagoptions
                }
            case TOGGLE_TODO:
                let toggledTask = state.tasks.find(task => task.id === action.id);
                toggledTask!.done = !toggledTask!.done;
                return {
                    tasks: state.tasks,
                    tags: state.tags,
                    tagoptions: state.tagoptions
                }
            default:
                return state
        }
}

export function tagReducer(state = initialState, action: TagActionTypes)
    : TaskTagListState {
        switch(action.type){
            case ADD_TAG:
                let newTag:ITag = {
                    name: action.newname,
                    id: uuidv1(),
                }
                state.tags.push(newTag)
                return {
                    tasks: state.tasks,
                    tags: state.tags,
                    tagoptions: state.tagoptions
                }
            case DELETE_TAG:
                console.log("reducer");
                let newTags = state.tags.filter(tag => tag.id !== action.id);
                console.log(newTags);
                return {
                    tasks: state.tasks,
                    tags: newTags,
                    tagoptions: state.tagoptions
                }
            default:
                return state
        }
}

//create another reducer for the filtering, then combine the reducers

const TaskList = combineReducers({
    taskReducer,
    tagReducer
})

export default TaskList



