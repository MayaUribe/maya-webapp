import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';
import Project from "./pages/project/index";
import Home from "./pages/home/index";

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/project/:id" component={Project}/>
  </Router>

), document.getElementById('root'));

registerServiceWorker();
