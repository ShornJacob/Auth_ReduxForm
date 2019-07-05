import { combineReducers, createStore, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { authReducer } from 'auth/reducers'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  auth : authReducer,
  form: formReducer

//   other reducers here
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;