import { createStore } from 'redux';
import gameReducer from './reducers'; // Make sure the path is correct for your reducers file

const store = createStore(gameReducer); // Create the Redux store

export default store;
