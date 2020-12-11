import { createStore } from 'redux'
import eventReducer from './reducer'


const store = createStore(eventReducer);

export default store;