import {
  TODOS_LOADING,
  TODOS_LOADED,
  TODOS_CREATE,
  TODOS_UPDATE,
} from '../actions/todos';

const initialState = {
  loading: false,
  todos: [],
};

function createTodo(array) {
  const save = [...array, { text: '', checked: false }];
  localStorage.setItem('todos', JSON.stringify(save));
  return save;
}

function updateTodo(array, action) {
  const save = array.map((item, index) => {
    if (index.toString() !== action.index) return item;
    return action.todo;
  });
  localStorage.setItem('todos', JSON.stringify(save));
  return save;
}

function todos(state = initialState, action) {
  switch (action.type) {
    case TODOS_LOADING:
      return Object.assign({}, state, { loading: action.loading });
    case TODOS_LOADED:
      return Object.assign({}, state, { todos: action.todos });
    case TODOS_CREATE:
      return Object.assign({}, state, { todos: createTodo(state.todos) });
    case TODOS_UPDATE:
      return Object.assign({}, state, { todos: updateTodo(state.todos, action) });
    default:
      return state;
  }
}

export default todos;
