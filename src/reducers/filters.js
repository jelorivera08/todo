import { FILTERS } from '../constants';

const filters = (state = { activeFilter: FILTERS.ALL }, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return { ...state, activeFilter: action.filter };
    default:
      return state;
  }
};

export default filters;
