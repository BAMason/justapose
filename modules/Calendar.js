import Calendar from 'rc-calendar';
import React from 'react';
import ReactDOM from 'react-dom';
import NavLink from './NavLink';

export default React.createClass({
  render() {
    return (
      <div>
        <Calendar />
        <NavLink to="/calendar/entry" className="btn">New Entry</NavLink>
      </div>
    );
  },
});
