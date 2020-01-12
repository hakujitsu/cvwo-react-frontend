import { combineReducers } from 'redux';
import {
    TaskTagListState,
    TaskActionTypes,
    TagActionTypes,
    ITask,
    ITag,
    IDropdownOptions,
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
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
            id: "0e7762f0-338a-11ea-872e-1d7406f7a6ab",
            colour: "#DC9393"
        },
        {
            name: "Work",
            id: "0e778a01-338a-11ea-872e-1d7406f7a6ab",
            colour: "#A8D8A5"
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
export function taskReducer(state = initialState, action: TaskActionTypes | TagActionTypes)
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
            case ADD_TAG:
                let newTag:ITag = {
                    name: action.newname,
                    colour: action.newcolour,
                    id: uuidv1(),
                }
                let newTagOption:IDropdownOptions = {
                    key: action.newname,
                    text: action.newname,
                    value: action.newname
                }
                return {
                    tasks: state.tasks,
                    tags: [...state.tags, newTag],
                    tagoptions: [...state.tagoptions, newTagOption]
                }
            case DELETE_TAG:
                return {
                    tasks: state.tasks,
                    tags: state.tags.filter(tag => tag.id !== action.id),
                    tagoptions: state.tagoptions.filter(tagoption => tagoption.key !== action.name)
                }
            case EDIT_TAG:
                let editedTag = state.tags.find(tag => tag.id === action.id);
                let editedTagOption = state.tagoptions.find(tagOption => tagOption.key === editedTag!.name);
                editedTagOption!.key = action.editname;
                editedTagOption!.text = action.editname;
                editedTagOption!.value = action.editname;
                return {
                    tasks: state.tasks,
                    tags: state.tags.map(tag => tag.id === action.id
                                            ? { ...tag, name: action.editname, colour: action.editcolor}
                                            : tag),
                    tagoptions: state.tagoptions
                }
            default:
                return state;
        }
}

//create another reducer for the filtering, then combine the reducers

const TaskList = combineReducers({
    taskReducer,
})

export default TaskList
