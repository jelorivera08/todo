export const addATodo = (todo) => ({
  type: 'ADD_A_TODO',
  todo,
});

export const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
});

export const toggleTodoStatus = (todoId, status) => ({
  type: 'TOGGLE_TODO_STATUS',
  todoId,
  status,
});
