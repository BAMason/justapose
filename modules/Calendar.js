import Calendar from 'rc-calendar';
import React from 'react';
import ReactDOM from 'react-dom';
import NavLink from './NavLink'
import axios from 'axios'

axios.get('/api/entries')
.then((data) => {

  let dates = []

  let dataArr = data.data
  console.log('data array', dataArr);
  for (var i = 0; i < dataArr.length; i++) {
    this.dates.push(dataArr[i].date)
  }
  console.log('dates', dates);
})
.catch((err) => {
  console.log('err', err);;
})

export default React.createClass({
  render() {
    entries()
    return (
      <div>
        <Calendar />
        <NavLink to="/calendar/entry" className="btn">New Entry</NavLink>
      </div>
    );
  },
});
