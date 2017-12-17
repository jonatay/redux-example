import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import { getVisibleTodos, getErrorMessage, getIsFetching } from '../reducers';
import TodoList from './TodoList';
import FetchError from './FetchError';

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
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }

  render() {
    const { isFetching, errorMessage, toggleTodo, todos } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }
    if (errorMessage && !todos.length) {
      return (
        <FetchError message={errorMessage} onRetry={() => this.fetchData()} />
      );
    }

    return <TodoList todos={todos} onTodoClick={toggleTodo} />;
  }
}

VisibleTodoList.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  errorMessage: PropTypes.string,
  todos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    todos: getVisibleTodos(state, filter),
    filter
  };
};

VisibleTodoList = withRouter(
  connect(mapStateToProps, actions)(VisibleTodoList)
);

export default VisibleTodoList;

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
//
// // Before: import { toggleTodo, receiveTodos } from '../actions'
// import * as actions from '../actions'; // After
//
// import { getVisibleTodos, getIsFetching } from '../reducers/';
//
// import TodoList from './TodoList';
//
// class VisibleTodoList extends Component {
//   componentDidMount() {
//     this.fetchData();
//   }
//
//   componentDidUpdate(prevProps) {
//     if (this.props.filter !== prevProps.filter) {
//       this.fetchData();
//     }
//   }
//
//   fetchData() {
//     const { filter, fetchTodos, requestTodos } = this.props;
//     requestTodos(filter);
//     fetchTodos(filter);
//   }
//
//   render() {
//     const { toggleTodo, todos, isFetching } = this.props;
//     // if (isFetching && !todos.length) {
//     //   return <p>...Loading</p>;
//     // }
//     return <TodoList todos={todos} onTodoClick={toggleTodo} />;
//   }
// }
//
// // ********** VisibleTodoList Container
// const mapStateToProps = (state, { match }) => {
//   const filter = match.params.filter || 'all';
//   return {
//     todos: getVisibleTodos(state, filter),
//     isFetching: getIsFetching(state, filter),
//     filter
//   };
// };
//
// // const mapDispatchToProps = dispatch => ({
// //   onTodoClick(id) {
// //     dispatch(toggleTodo(id));
// //   }
// // });
//
// VisibleTodoList = withRouter(
//   connect(
//     mapStateToProps,
//     // before { onTodoClick: toggleTodo, receiveTodos })
//     actions //After
//   )(VisibleTodoList)
// );
//
// export default VisibleTodoList;
