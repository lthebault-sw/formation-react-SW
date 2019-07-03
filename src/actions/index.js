export function manageTodo(index) {
  return {
    type: 'MANAGE_TODO',
    index
  };
}

export function addTodo(name) {
  return {
    type: 'ADD_TODO',
    name
  };
}
