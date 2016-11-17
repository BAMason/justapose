import Calendar from 'rc-calendar';
import React from 'react'
import ReactDOM from 'react-dom';
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2 className="calendarTitle">Calendar</h2>
        <div><Calendar /></div>
        <ul>
          <li><NavLink to="/calendar/entry">Calendar Entry</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
