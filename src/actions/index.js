import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

/// action calling another action
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    //wait until api call is completed
    await dispatch(fetchPosts());
    const userIds=_.uniq(_.map(getState().posts, 'userId')); //Find unique ID
    
    // we dont have to wait because there are no more code after this line
    // async doesnt work with sync
    userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => {

    // dispatch: can change data
    // getStat: we can read or access any data that we want
    
    // inside of our function , we are going to wait for our requests to finis

    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data })


    }
}

export const selectPost = () => {
    return {
        type: 'SELECT_POST'
    }
}


export const fetchUser = (id) => {
    return async dispatch => {
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({ type: 'FETCH_USER', payload: response.data })


    }
}