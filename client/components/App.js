import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators'; // Grab all actionCreators
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
// mapStateToProps takes our state (i.e. posts & comments) & mapDispatchToProps takes our actionCreators. And surface them to props.
// After connecting, immediately call it against (Main). I.e. Adds all of the state & actionCreator data to Main's props.

export default App;

