import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Before: import { toggleTodo, receiveTodos } from '../actions'
import * as actions from '../actions'; // After

import { getVisibleTodos, getIsFetching } from '../reducers/';

import TodoList from './TodoList';

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
    const { filter, fetchTodos, requestTodos } = this.props;
    requestTodos(filter);
    fetchTodos(filter);
  }

  render() {
    const { toggleTodo, todos, isFetching } = this.props;
    if (isFetching && !todos.length) {
      return <p>...Loading</p>;
    }
    return <TodoList todos={todos} onTodoClick={toggleTodo} />;
  }
}

// ********** VisibleTodoList Container
const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
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
