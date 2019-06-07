import React from 'react';
import styles from './TodoList.module.css';
import { FILTERS } from '../../constants';

const Todo = (props) =>
  props.todos.map((todo) => {
    if (
      todo.status !== props.activeFilter &&
      props.activeFilter !== FILTERS.ALL
    ) {
      return null;
    }

    return (
      <div className={styles.Todo} key={todo.id}>
        <label className={styles.TodoContainer}>
          <input
            onClick={() => props.handleStatusChange(todo)}
            type="checkbox"
            name="my-checkbox"
            checked={todo.status === FILTERS.DONE ? true : false}
          />
          <div className={styles.Todotext}>{todo.text}</div>
        </label>
      </div>
    );
  });

export default Todo;
