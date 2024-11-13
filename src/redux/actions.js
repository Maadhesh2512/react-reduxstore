export const ADD_STUDENT = 'ADD_STUDENT';

export const addStudent = (studentData) => {
  return {
    type: ADD_STUDENT,
    payload: studentData,
  };
};
