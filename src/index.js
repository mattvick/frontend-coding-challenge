import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './style.scss';

import Movie from './Movie';
import Search from './Search';

const App = () => (
  <Router>
    <div className="container">
      <header>
        <h1>Frontend Coding Challenge</h1>
        <Search />
      </header>
      <main>
        <Switch>
          <Route path="/movie/:id">
            <Movie />
          </Route>
          <Route>
            <p>Search above to find information about your favourite movies.</p>
          </Route>
        </Switch>
      </main>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
