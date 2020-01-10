export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


export interface ITask{
    name: string
    done: boolean
    tag: string[]
    // date?: Date
    id: string
}

export interface ITag{
    name: string
}

export interface ITagOptions{
    key: string,
    text: string,
    value: string
}

export interface TaskTagListState {
    tasks: ITask[]
    tags: ITag[]
    tagoptions: ITagOptions[]
}
// Perhaps create another interface for filtering tasks????


// Action Interfaces
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



export type TaskActionTypes = AddTodoAction | ToggleTodoAction | SetVisibilityFilterAction | DeleteTodoAction | EditTodoAction

