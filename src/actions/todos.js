export const TODOS_LOADING = 'TODOS_LOADING';
export const TODOS_LOADED = 'TODOS_LOADED';
export const TODOS_CREATE = 'TODOS_CREATE';
export const TODOS_UPDATE = 'TODOS_UPDATE';
export const TODOS_DELETE = 'TODOS_DELETE';

export function todosLoading(loading) {
  return {
    type: TODOS_LOADING,
    loading,
  };
}

export function todosLoaded(todos) {
  return {
    type: TODOS_LOADED,
    todos,
  };
}

export function todosCreate() {
  return {
    type: TODOS_CREATE,
  };
}

export function todosUpdate(index, todo) {
  return {
    type: TODOS_UPDATE,
    index,
    todo,
  };
}

export function todosDelete(index) {
  return {
    type: TODOS_DELETE,
    index,
  };
}

export function todosFetch() {
  return (dispatch) => {
    dispatch(todosLoading(true));
    const todos = localStorage.getItem('todos');
    if (todos === null) {
      dispatch(todosLoaded([]));
    } else {
      dispatch(todosLoaded(JSON.parse(todos)));
    }
    dispatch(todosLoading(false));
  };
}
