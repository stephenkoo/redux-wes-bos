import React from 'react';

const Comments = React.createClass({
  renderComment(comment, i) { // Used to avoid having create 2nd component to load comments
    // console.log(comment);
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  }, 
  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
      </div>    
    )
  }
});

export default Comments;