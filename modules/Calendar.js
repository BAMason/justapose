import Calendar from 'rc-calendar';
import React from 'react'
import ReactDOM from 'react-dom';
import NavLink from './NavLink'
import axios from 'axios';


class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entries: [] }
    // this.handleSubmit = this.handleSubmit.bind(this);

    // const dataObj = {};

    console.log();

    axios.get(`/api/entries`)
    .then((data) => {
      console.log(`entries-data`, data)
      // data.data.forEach((each) => { dataObj[each.name] = null; });
    })
    // .then(() => {
    //   this.setState({ postures: dataObj });
    // })
    .catch((err) => console.error(err));
  }
}

export default React.createClass({
  render() {
    return (
      <div>
        <h2 className="calendarTitle">Calendar</h2>
        <div><Calendar /></div>
        <div><Entries /></div>
        <ul>
          <li><NavLink to="/calendar/entry">Calendar Entry</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
