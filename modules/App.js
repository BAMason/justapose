import React from 'react'
import NavLink from './NavLink'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <ul role="nav" className="main-nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/entries">Entries</NavLink></li>
          <li><NavLink to="/photos">Photos</NavLink></li>
          <li>{<a href="/api/auth/google">Google Login</a>}</li>
          <li>{<a href="/api/auth/logout">Logout</a>}</li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
