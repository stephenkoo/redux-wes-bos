import React, { Component } from 'react';
import { Link } from 'react-router';

// const Main = (props) => (
//   <div>
//     <h1>
//       <Link to="/">sad</Link>
//     </h1>
//     {React.cloneElement(props.children, props)}
//   </div>
// );
// Above: Can't pass down props with just {this.props.children} so use React.cloneElement
// Note React 0.14 method doesn't need this.props, also can't do hot reloading.

class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Inlightagram</Link>
        </h1>
      {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
};

// const Main = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>
//           <Link to="/">asd</Link>
//         </h1>
//         {React.cloneElement(this.props.children, this.props)}
//       </div>  
//     )
//   }
// });

export default Main;

// const ericObj = {
//   personOne: 'tones',
//   personTwo: 'agata',
// };

// const { personOne } = ericObj;

// const { nameProp, heightProp } = this.props;