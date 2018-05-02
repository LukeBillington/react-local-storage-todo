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

function todos(state = initialState, action) {
  switch (action.type) {
    case TODOS_LOADING:
      return Object.assign({}, state, { loading: action.loading });
    case TODOS_LOADED:
      return Object.assign({}, state, { todos: action.todos });
    case TODOS_CREATE:
      return Object.assign({}, state, { todos: [...state.todos, { text: '', checked: false }] });
    case TODOS_UPDATE:
      return Object.assign({}, state.todos, state.todos.map((item, index) => {
        if (index !== action.index) return item;
        return action.todo;
      }));
    default:
      return state;
  }
}

export default todos;
