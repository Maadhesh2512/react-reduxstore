import { ADD_STUDENT } from './actions';

const initialState = {
  students: [],
};

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    default:
      return state;
  }
};

export default studentsReducer;
