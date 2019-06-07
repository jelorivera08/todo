import React from 'react';
import styles from './TodoList.module.css';
import Todo from './Todo';
import { connect } from 'react-redux';
import { FILTERS } from '../../constants';
import { toggleTodoStatus } from '../../actions';
import { bindActionCreators } from 'redux';

const TodoList = (props) => {
  const handleStatusChange = (todo) => {
    props.updateTodos({
      ...todo,
      status: todo.status === FILTERS.DONE ? FILTERS.PENDING : FILTERS.DONE,
    });
  };

  return (
    <div className={styles.TodoList}>
      <hr />
      <Todo
        activeFilter={props.filter}
        handleStatusChange={handleStatusChange}
        todos={props.todos}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  filter: state.filters.activeFilter,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateTodos: toggleTodoStatus }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
