import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Entries from './modules/Entries'
import Entry from './modules/Entry'
import Home from './modules/Home'
import Photos from './modules/Photos'


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/entries" component={Entries} />
      <Route path="/entries/:entry" component={Entry}/>
      <Route path="/photos" component={Photos}/>
    </Route>
  </Router>
), document.getElementById('app'))
