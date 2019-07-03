import reducers from '../../reducers';

test('MANAGE_TODO', () => {
  let state;
  state = reducers(
    {
      todo: {
        todoList: [
          { name: 'Learn React', done: false },
          { name: 'Learn CSS', done: true },
          { name: 'Web development', done: true }
        ],
        todos: [
          { name: 'Learn React', done: false },
          { name: 'Learn CSS', done: true },
          { name: 'Web development', done: true }
        ]
      }
    },
    { type: 'MANAGE_TODO', index: 3 }
  );
  expect(state).toEqual({
    todo: {
      todoList: [
        { name: 'Learn React', done: false },
        { name: 'Learn CSS', done: true },
        { name: 'Web development', done: true }
      ],
      todos: [
        { name: 'Learn React', done: false },
        { name: 'Learn CSS', done: true },
        { name: 'Web development', done: true }
      ]
    }
  });
});

test('ADD_TODO', () => {
  let state;
  state = reducers(
    {
      todo: {
        todoList: [
          { name: 'Learn React', done: false },
          { name: 'Learn CSS', done: true },
          { name: 'Web development', done: true }
        ]
      }
    },
    { type: 'ADD_TODO', name: 'ddzd' }
  );
  expect(state).toEqual({
    todo: {
      todoList: [
        { name: 'Learn React', done: false },
        { name: 'Learn CSS', done: true },
        { name: 'Web development', done: true },
        { name: 'ddzd', done: false }
      ]
    }
  });
});
