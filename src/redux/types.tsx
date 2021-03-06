// ACTION TYPES
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const ADD_TAG = 'ADD_TAG'
export const DELETE_TAG = 'DELETE_TAG'
export const EDIT_TAG = 'EDIT_TAG'

// OBJECT INTERFACES
export interface ITask{
    name: string
    done: boolean
    tag: string[]
    id: string
}

export interface ITag{
    name: string
    colour: string,
    id: string
}

export interface IDropdownOptions{
    key: string,
    text: string,
    value: string
}

export interface TaskTagListState {
    tasks: ITask[]
    tags: ITag[]
    tagoptions: IDropdownOptions[]
}
// Perhaps create another interface for filtering tasks????



// ACTION INTERFACES 
interface AddTodoAction {
    type: typeof ADD_TODO
    newname: string,
    newtag: string[]
}

interface DeleteTodoAction {
    type: typeof DELETE_TODO
    id: string
}

interface EditTodoAction{
    type: typeof EDIT_TODO
    newname: string,
    newtag: string[]
    id: string
}

interface ToggleTodoAction {
    type: typeof TOGGLE_TODO
    id: string
}

interface SetVisibilityFilterAction {
    type: typeof SET_VISIBILITY_FILTER
    filter: string
}

interface AddTagAction {
    type: typeof ADD_TAG
    newname: string,
    newcolour: string,
}

interface DeleteTagAction {
    type: typeof DELETE_TAG
    name:string
    id: string
}

interface EditTagAction{
    type: typeof EDIT_TAG
    editname: string,
    editcolor: string,
    id: string
}


export type TaskActionTypes = AddTodoAction | ToggleTodoAction | SetVisibilityFilterAction | DeleteTodoAction | EditTodoAction
export type TagActionTypes = AddTagAction | DeleteTagAction | EditTagAction

