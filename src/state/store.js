import {createStore, combineReducers} from 'redux'
import userReducer from './reducers/userReducer'; 
const rootReducer = combineReducers({
  user: userReducer,
});
const Store = createStore(rootReducer);
export default Store;