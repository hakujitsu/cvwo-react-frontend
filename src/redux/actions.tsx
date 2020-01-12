import { 
    TaskActionTypes,
    TagActionTypes,
    ADD_TODO, 
    DELETE_TODO,
    EDIT_TODO,
    TOGGLE_TODO, 
    ADD_TAG,
    DELETE_TAG,
    EDIT_TAG 
} from './types'


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
  // use this for future filters?
  // do we keep this in actions?
}


//  ACTION CREATORS
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

export function addTag(newname:string, newcolour:string):TagActionTypes {
  return { type: ADD_TAG, 
           newname: newname,
           newcolour: newcolour
  }
}
export function deleteTag(index:string, name:string):TagActionTypes{
  return {type: DELETE_TAG, 
          id: index,
          name: name
  }
}

export function editTag(newname:string, editcolor:string, index:string):TagActionTypes{
  return { type: EDIT_TAG, 
           editname: newname,
           editcolor: editcolor,
           id: index
  }
}


/* 
Things to add
- Edit todolist
- More fields for add todolist (and edit)
- Filters
- Same things but tags
*/