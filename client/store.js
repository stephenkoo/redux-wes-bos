import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// Import data from client/data
import comments from './data/comments';
import posts from './data/posts';

// create an object for default data
const defaultState = {
  posts,
  // Same as `posts: posts`
  comments
};


const store = createStore(rootReducer, defaultState); // rootReducer is how to interface with Redux.
export const history = syncHistoryWithStore(browserHistory, store); // put browserHistory into redux store
export default store;