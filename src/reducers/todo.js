const initialState = {
  todoList: [
    { name: 'Learn React', done: false },
    { name: 'Learn CSS', done: true },
    { name: 'Web development', done: true }
  ]
};

function todo(state = initialState, action) {
  switch (action.type) {
    case 'MANAGE_TODO':
      const todos = state.todoList;
      todos[action.index].done = !todos[action.index].done;
      return { ...state, todos };
    case 'ADD_TODO':
      return { ...state, todoList: [...state.todoList, { name: action.name, done: false }] };
    default:
      return state;
  }
}

export default todo;
