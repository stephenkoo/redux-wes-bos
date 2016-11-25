import React from 'React';
import {Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group'; // heart animation when liking post

const Photo = React.createClass({
  render() {
    const {post, i, comments} = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            {/*post.caption*/}
            <img src={post.display_src} alt={post.caption} className="grid-photo" />
          </Link>
          {/* To shorten this.p rops.post.code or ...caption to post.code, added const { ...} = this.props on top */}
          <CSSTransitionGroup transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={post.likes} className="likes-heart">{post.likes}</span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button classname="likes">&hearts; {post.likes}</button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="speech-bubble"></span>
              {comments[post.code] ? comments[post.code].length : 0}
            {/* If there are comments, show number of comments, otherwise 0 */}
            </Link>
          </div>
        </figcaption>
      </figure>

    )
  }
});

export default Photo;