import React from 'react';

const Comments = React.createClass({
  renderComment(comment, i) { // Used to avoid having create 2nd component to load comments
    // console.log(comment);
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
        </p>
      </div>
    )
    // onClick={this.props.removeComment} calls removeComment reducer which takes 2 components
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
    console.log(this.props);
    this.props.addComment(postId, author, comment);
    // Change our comments reducer in reducers/comments.js to display it
    this.refs.commentForm.reset(); // Removes comments in form when subitted
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