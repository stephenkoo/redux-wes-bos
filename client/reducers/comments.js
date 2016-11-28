// Sub-reducers & reducer composition - we create reducers that just get updates just a slice of the state.
function postComments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }]; // Just tacks on new comment {} along with others in ...state
    case 'REMOVE_COMMENT':
      console.log('Remove comment');
      // return new state without delete comment
      return [
        // from start to the one we want to delete
        ...state.slice(0, action.i),
        // after deleted one, to the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  console.log(state, action);
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;