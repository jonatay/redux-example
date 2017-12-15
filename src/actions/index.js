// import { v4 } from 'node-uuid';
const uuidv4 = require('uuid/v4');
/*
  Actions
*/
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: uuidv4(),
  text: text
});
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter: filter
});
export const toggleTodo = id => ({ type: 'TOGGLE_TODO', id });
