import { combineReducers } from "redux";
import userReducer from './userReducer';
import songsReducer from './songsReducer';
import tokenReducer from './tokenReducer';

export default combineReducers({
  tokenReducer,
  songsReducer,
  userReducer,
});
