import { 
    TaskActionTypes,
    ADD_TODO, 
    DELETE_TODO,
    EDIT_TODO,
    TOGGLE_TODO, 
    SET_VISIBILITY_FILTER, 
} from './types'


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
  // use this for future filters?
  // do we keep this in actions?
}

/*
 * action creators
 */
export function addTodo(newname:string, newtag:string[]):TaskActionTypes {
  return { type: ADD_TODO, 
           newname: newname,
           newtag: newtag,
  }
}
export function deleteTodo(index:string):TaskActionTypes{
  return {type: DELETE_TODO, 
          id: index
  }
}

export function editTodo(newname:string, newtag:string[], index:string):TaskActionTypes{
  return { type: EDIT_TODO, 
           newname: newname,
           newtag: newtag,
           id: index
  }
}

export function toggleTodo(index:string):TaskActionTypes {
  return { type: TOGGLE_TODO, 
           id : index }
}
export function setVisibilityFilter(filter:string):TaskActionTypes {
  return { type: SET_VISIBILITY_FILTER, 
           filter: filter 
  }
}


/* 
Things to add
- Edit todolist
- More fields for add todolist (and edit)
- Filters
- Same things but tags
*/