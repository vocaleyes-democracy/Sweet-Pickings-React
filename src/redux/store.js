import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer'

const store = createStore(rootReducer, applyMiddleware(thunk))

// console.log(store)

export default store