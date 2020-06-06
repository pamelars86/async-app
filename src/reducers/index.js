import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    //dummy variable
    posts: postsReducer,
    users: usersReducer
});