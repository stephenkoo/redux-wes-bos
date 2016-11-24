// Comment & post reducers must be merged into a single root reducer

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import posts from './posts';
import comments from './comments';
// Note: Every reducer runs everytime an action dsipatches/occurs. You then stipulate what you'd like to change in state. 

const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;