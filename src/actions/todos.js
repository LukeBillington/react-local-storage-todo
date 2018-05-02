export const TODOS_LOADING = 'TODOS_LOADING';
export const TODOS_LOADED = 'TODOS_LOADED';
export const TODOS_CREATE = 'TODOS_CREATE';
export const TODOS_UPDATE = 'TODOS_UPDATE';

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

export function todosFetch() {
  return (dispatch) => {
    const todos = [
      { text: 'One', checked: false },
      { text: 'Two', checked: true },
      { text: 'Three', checked: false },
      { text: 'Four', checked: true },
    ];
    dispatch(todosLoading(true));
    dispatch(todosLoaded(todos));
    dispatch(todosLoading(false));
  };
}
