import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

// ********** AddTodo Container
let AddTodo = ({ dispatch }) => {
  let input;

  const doAddTodo = () => {
    dispatch(addTodo(input.value));
    input.value = '';
    input.focus();
  };
  return (
    <div>
      <input
        ref={node => (input = node)}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            doAddTodo();
          }
        }}
      />
      <button
        onClick={() => {
          doAddTodo();
        }}>
        Add Todo
      </button>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
