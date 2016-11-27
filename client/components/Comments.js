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
  handleSubmit (e) {
    e.preventDefault(); // prevents event refreshing on submit
    // console.log("Submitting form")
    // console.log(this.refs)
    const {postId} = this.props.params;
    const author = this.refs.author.value; // this.refs.author is the html element, .value is the actual text inside
    const comment = this.refs.comment.value;
    // console.log(postId, author, comment);
    // We're using the addComments reducer to update state in actionCreators.js
    this.props.addComments(postId, author, comment);
    // Change our comments reducer in reducers/comments.js to display it

  },
  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden />
        </form>
      </div>    
    )
    // refs used to grab content from form
  }
});

export default Comments;