import { FILTERS } from '../constants';
let generatedId = 1;

const todos = (
  state = [{ id: 0, text: 'Start adding todos!', status: FILTERS.PENDING }],
  action
) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: generatedId++, text: action.text, status: FILTERS.PENDING },
      ];
    case 'UPDATE_TODO':
      let todoIndex = state.findIndex((todo) => todo.id === action.todo.id);
      let newState = [...state];
      newState[todoIndex] = action.todo;
      return newState;
    default:
      return state;
  }
};

export default todos;
