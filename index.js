import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Calendar from './modules/Calendar'
import Entry from './modules/Entry'
import Home from './modules/Home'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/calendar" component={Calendar}>
        <Route path="/calendar/:entry" component={Entry}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
