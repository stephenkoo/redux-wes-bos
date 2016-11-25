// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
  console.log("The post will change");
  console.log(state, action);
  // We're doing functional programming so we can't just write: state[action.i].likes++ to increment. A pure function is a predictable function - it will return the same result every time even if run multiple times in a row because it does not mutate an external state.
  switch(action.type) {
    case 'INCREMENT_LIKES' : 
      // return updated state
      const i = action.index;
      return [
        // We only want to change 1 post (the one we liked):
        ...state.slice(0,i), // take everything up & to before the one we're updating
        {...state[i], likes: state[i].likes + 1}, // Updated object
        ...state.slice(i+1), // take everything after the one we're updating
      ]
    default:
      return state;
  }

}

export default posts;

/*
// Impure function
function addLike(pic) {
  pic.likes++;
  return pic;
}

// Pure function
function addLike(pic) {
  let pic = Object.assign({}, pic); // Create a blank object copy & increment on that.
  pic.likes++;
  return pic;
}
}

*/