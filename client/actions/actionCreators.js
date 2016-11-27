// increment likes
export function increment(index) {
  // actions are just objects like so:
  return {
    type: 'INCREMENT_LIKES',
    index
    // Same as `index: index`
  }
}
// You can activate this by selecting <Provider> in React dev tool, then typing into dev tools `$r.store.dispatch({type: 'INCREMENT_LIKES', index: 0});`

// add comment
export function addComment(postId, author, comment) {
  // console.log("Dispatching add comment");
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }
}