import { createStore } from 'redux';
import studentsReducer from './reducers';

const store = createStore(studentsReducer);

export default store;
