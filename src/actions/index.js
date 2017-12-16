const uuidv4 = require('uuid/v4');
/*
  Actions
*/
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: uuidv4(),
  text: text
});

export const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
});

export const toggleTodo = id => ({ type: 'TOGGLE_TODO', id });
