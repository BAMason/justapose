import Calendar from 'rc-calendar';
import React from 'react'
import ReactDOM from 'react-dom';
import NavLink from './NavLink'
import axios from 'axios';
import cookie from 'react-cookie';

export default class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entries: [] }

    axios.get(`/api/entries`)
    .then(data => {
      return data.data.map(each => {
        return <entry key={each.id}>{each.name}</entry>
      })
    })
    .then((data) => {
      this.setState({ entries: data });
      console.log(`this.state.entries`, this.state.entries);
    })
    .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        {/* <h2 className="calendarTitle">Calendar</h2> */}
        <div>{this.state.entries}</div>
        <ul>
          <li><NavLink to="/calendar/entry">Calendar Entry</NavLink></li>
        </ul>
        {/* {this.props.children} */}
      </div>
    )
  }
}
