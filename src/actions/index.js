export const addATodo = (text) => ({ type: 'ADD_TODO', text });

export const changeFilter = (filter) => ({ type: 'CHANGE_FILTER', filter });

export const toggleTodoStatus = (todo) => ({
  type: 'UPDATE_TODO',
  todo,
});
