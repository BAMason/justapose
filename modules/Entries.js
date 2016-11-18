import Calendar from 'rc-calendar';
import React from 'react';
import ReactDOM from 'react-dom';
import NavLink from './NavLink'
import axios from 'axios';
import cookie from 'react-cookie';
import moment from 'moment';

export default class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entries: [] }

    axios.get(`/api/entries`)
    .then(data => {
      return data.data.map(each => {
        return <entry key={each.id}>

          <div className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{each.name}</span>
                  <p>Notes: {each.notes}</p>
                  <br/>
                  <p>{moment(each.updated_at).format('MMMM Do YYYY')}</p>
                </div>
              </div>
            </div>
          </div>

        </entry>
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
        <div>{this.state.entries}</div>
        <ul>
          <li><NavLink to="/entries/entry">Entries</NavLink></li>
        </ul>
      </div>
    )
  }
}
