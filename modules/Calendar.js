import Calendar from 'rc-calendar';
import React from 'react'
import ReactDOM from 'react-dom';
import NavLink from './NavLink'
import axios from 'axios'


axios.get('/api/entries')
.then((data) => {

  let dates = []
  let dataArr = data.data
  console.log('data array', dataArr);
  for (var i = 0; i < dataArr.length; i++) {
    dates.push(dataArr[i].date)
  }
  console.log('dates', dates);
})
.catch((err) => {
  console.log('err', err);;
})

export default React.createClass({


// $.ajax({
//   method: GET,
//   url: '/entries',
// })
// .success(function(data) {
//   console.log('success', data);
// })
// .fail(() => {
//   console.log('i failed');
// })

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
