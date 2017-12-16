import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Before: import { toggleTodo, receiveTodos } from '../actions'
import * as actions from '../actions'; // After

import { getVisibleTodos } from '../reducers/';

import TodoList from './TodoList';

import { fetchTodos } from '../api';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }
  fetchData() {
    const { filter, receiveTodos } = this.props;
    fetchTodos(filter).then(todos => receiveTodos(filter, todos));
  }
  render() {
    return <TodoList {...this.props} />;
  }
}

// ********** VisibleTodoList Container
const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter
  };
};

// const mapDispatchToProps = dispatch => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id));
//   }
// });

VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    // before { onTodoClick: toggleTodo, receiveTodos })
    actions //After
  )(VisibleTodoList)
);

export default VisibleTodoList;
