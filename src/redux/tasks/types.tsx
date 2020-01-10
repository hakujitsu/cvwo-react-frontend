export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const DELETE_TODO = 'DELETE_TODO'

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

interface ToggleTodoAction {
    type: typeof TOGGLE_TODO
    id: number
}

interface SetVisibilityFilterAction {
    type: typeof SET_VISIBILITY_FILTER
    filter: string
}

interface DeleteTodoAction {
    type: typeof DELETE_TODO
    id: number
}

export type TaskActionTypes = AddTodoAction | ToggleTodoAction | SetVisibilityFilterAction | DeleteTodoAction

