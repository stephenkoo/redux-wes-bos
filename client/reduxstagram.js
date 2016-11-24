import React from 'react';

import {render} from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" components={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)
// Swapped history={browserHistory} with {history} which was created in store.js which syncs browserHistory with store

// render(<p>hi</p>, document.getElementById('root'));
// render(<Main/>, document.getElementById('root'));
// render(<Main><p>Hi</p></Main>, document.getElementById('root'));
render(router, document.getElementById('root'));