import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { postures: [], photos: [] };
    this.handleSubmit = this.handleSubmit.bind(this);

    const dataObj = {};

    axios.get(`/api/postures`)
    .then((data) => {
      data.data.forEach((each) => { dataObj[each.name] = null; });
    })
    .then(() => {
      this.setState({ postures: dataObj });
    })
    .catch((err) => console.error(err));
  }

  getPhotos(list) {
    const elements = list.map((photo, index) => {
      return <img key={index} src={photo.photo} alt={photo.name} className="col s12"/>;
    });
    this.setState({ photos: elements });
  }

  getEntries(uID, pose) {
    axios.get(`/api/entries`)
    .then((data) => {
      return data.data.filter((each) => {
        return each.user_id === uID && each.name === pose;
      });
    })
    .then((matches) => { this.getPhotos(matches); });
  }

  handleSubmit(event) {
    let userId;

    // get user_id from session info (handle passport heroku vs localhost array weirdness)
    const session = JSON.parse(window.atob(cookie.load(`session`))).passport;
    console.log(`photo session`, session);
    if (session.user.length) { userId = session.user[0].id; }
    else { userId = session.user.id; }
    // userId = 2;
    const posture = $(`#autocomplete-input`).val();

    this.getEntries(userId, posture);
  }

  render() {
    $(document).ready(() => {
      $(`input.autocomplete`).autocomplete({
        data: this.state.postures,
      });
    });

    return <div>
      <label htmlFor="autocomplete-input">Posture</label>
      <input type="text" id="autocomplete-input" className="autocomplete" />
      <br /><button onClick={this.handleSubmit} className="btn buttons">Get Photos</button>
      <div className="row">
        {this.state.photos}
      </div>
    </div>;
  }
}

module.exports = Photos;
