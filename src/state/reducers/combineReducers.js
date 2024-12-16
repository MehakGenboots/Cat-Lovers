import { combineReducers } from 'redux';
import userReducer from './userReducer';
import showPasswordReducer from './showpassword';
const rootReducer = combineReducers({
    user: userReducer,
    showPassword: showPasswordReducer,
});
export default rootReducer;