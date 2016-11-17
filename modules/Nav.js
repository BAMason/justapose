import React from 'react'
import NavLink from './NavLink'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/calendar">Calendar</NavLink></li>
          <li><NavLink to="/photos">Photos</NavLink></li>
          <li>{<a href="/api/auth/google">Login with Google</a>}</li>
          <li>{<a href="/api/auth/logout">Logout</a>}</li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
