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
      const todoList = state.todoList;
      todoList[action.index].done = !todoList[action.index].done;
      return { ...state, todoList };
    default:
      return state;
  }
}

export default todo;
