import React from 'react';
import Photo from './Photo';
// ES6 method
class PhotoGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        {/*{JSON.stringify(this.props.posts, null, '')} // This lists data directly. We want to present it nicely via Photo.js instead */}
        {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
        {/*Add {...this.props} to <Photo> to pass down data needed from <div classname="photo-grid">. 
          Each child needs unique key, e.g. index value.
          Why do you need i when you already have key? Because you can't access React key once inside the <Photo> - you can't this.props.key
          post to pass down specific info about post
          */}
      </div>
    );
    // We .map because this.props.post is an array. For each item, we'll create a <Photo />
  }
};

/*
// Functional component method
const PhotoGrid = props => (
  <div className="photo-grid">
    {JSON.stringify(props.posts, null, '')}
  </div>
);

// createClass method
const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {JSON.stringify(this.props.posts, null, '')}
      </div>
    )
  }
});


*/

export default PhotoGrid;