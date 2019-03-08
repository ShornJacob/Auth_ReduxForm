import { combineReducers, createStore, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  form: formReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;