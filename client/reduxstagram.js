import React from 'react';

import {render} from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import Components
import App from './components/App'; // Changed /Main to /App, since instead of importing Main.js directly, we use App to inject state & actionCreator props into Main.
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" components={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)
// Swapped history={browserHistory} with {history} which was created in store.js which syncs browserHistory with store

// Passing state into child components with Redux: Unlike react which requires you to pass it down via props every layer downwards, we can use Redux's connect to inject data directly to desired level
// We will expose data from Provider to Main component (3 levels down) & expose actionCreator functions to buttons using Connect 

// Changed <Route path="/" components={Main}> to {App}

// render(<p>hi</p>, document.getElementById('root'));
// render(<Main/>, document.getElementById('root'));
// render(<Main><p>Hi</p></Main>, document.getElementById('root'));
render(router, document.getElementById('root'));