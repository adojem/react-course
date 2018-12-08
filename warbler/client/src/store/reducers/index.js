import { combineReducers } from 'redux';
import currentUser from './curentUser';
import errors from './error';

const rootReducer = combineReducers({
   currentUser,
   errors,
});

export default rootReducer;
