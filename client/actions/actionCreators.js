// increment likes
export function increment(index) {
  // actions are just objects like so:
  return {
    type: 'INCREMENT_LIKES',
    index
    // Same as `index: index`
  }
}

// add comment 
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT'
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT'
    postId,
    i
  }
}