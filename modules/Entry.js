/* eslint-disable max-len, camelcase */

// import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { postures: [], data: [], types: [] };
    this.handleSubmit = this.handleSubmit.bind(this);

    const dataObj = {};
    const poses = {};

    // populate typeahead with list of posture names
    axios.get(`/api/postures`)
    .then((data) => {
      data.data.forEach((each) => {
        dataObj[each.name] = null;
        poses[each.name] = each.id;
      });
    })
    .then(() => {
      this.setState({ data: dataObj, postures: poses });
    })
    .catch((err) => console.error(err));

    // populate dropdown with list of type names
    axios.get(`/api/types`)
    .then((data) => {
      return data.data.map((each) => {
        return <option key={each.id}>{each.name}</option>;
      });
    })
    .then((elements) => {
      this.setState({ types: elements });
    })
    .catch((error) => console.error(error));
  }

  sendData(input) {
    // convert type name to type id then submit!
    axios.get(`/api/types`)
    .then((data) => {
      data.data.forEach((type) => {
        if (type.name === input.get(`type_id`)) { input.set(`type_id`, type.id); }
      });
    })
    .then(() => {
      axios.post(`/api/entries`, input)
      .then(() => window.location.assign(`/entries`))
      .catch(() => console.warn(`oh noes`));
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let userId;

    // get user_id from session info (handle passport heroku vs localhost array weirdness)
    const session = JSON.parse(window.atob(cookie.load(`session`))).passport;
    console.log(`entry session`, session);
    // if (session.user.length) { userId = session.user[0].id; }
    // else { userId = session.user.id; }
    userId = 2;
    if (userId) {
      // get form entries
      const formData = new FormData();
      formData.append(`user_id`, userId);
      if ($(`#photo`)[0].files[0]) {
        formData.append(`photo`, $(`#photo`)[0].files[0]);
      }
      $(`#form`).serializeArray().forEach((input) => formData.append(input.name, input.value));

      // convert posture name to posture id
      const pId = formData.get(`posture_id`);
      if (pId) {
        formData.set(`posture_id`, this.state.postures[pId]);
      }
      else { (formData.delete(`posture_id`)); }
      this.sendData(formData);
    }
    else { console.error(`You must be logged in!`); }
  }

  render() {
    $(document).ready(() => {
      $(`select`).material_select();
      $(`input.autocomplete`).autocomplete({
        data: this.state.data,
      });
    });

    return <div className="container">
      <form onSubmit={this.handleSubmit} className="row container" id="form" name="form">
        <label htmlFor="type_id">Entry Type</label>
        <select id="type_id" name="type_id" className="col s12">
          {this.state.types}
        </select>
        <div className="row">
          <input className="col s12" type="checkbox" id="sun_a" name="sun_a"/>
          <label htmlFor="sun_a">Sun A</label>
        </div>
        <div className="row">
          <input className="col s12" type="checkbox" id="sun_b" name="sun_b"/>
          <label htmlFor="sun_b">Sun B</label>
        </div>
        <div className="row">
          <input className="col s12" type="checkbox" id="standing" name="standing"/>
          <label htmlFor="standing">Standing</label>
        </div>
        <div className="row">
          <input className="col s12" type="checkbox" id="primary" name="primary"/>
          <label htmlFor="primary">Primary</label>
        </div>
        <div className="row">
          <input className="col s12" type="checkbox" id="secondary" name="secondary"/>
          <label htmlFor="secondary">Secondary</label>
        </div>
        <div className="row">
          <input className="col s12" type="checkbox" id="backbends" name="backbends"/>
          <label htmlFor="backbends">Backbends</label>
        </div>
        <div className="row">
          <input className="col s12" type="checkbox" id="finishing" name="finishing"/>
          <label htmlFor="finishing">Finishing</label>
        </div>
        <div className="row">
          <input className="col s12" type="checkbox" id="closing" name="closing"/>
          <label htmlFor="closing">Closing</label>
        </div>
        <div className="row">
          <input className="col s12 btn" type="file" accept="image/*" capture="camera" id="photo" name="photo"/>
        </div>
        <label htmlFor="autocomplete-input">Posture</label>
        <div className="row">
          <input className="col s12 autocomplete" type="text" id="autocomplete-input" name="posture_id"/>
        </div>
        <div className="row">
          <label htmlFor="notes">Notes</label>
          <input className="col s12" type="text" id="notes" name="notes"/>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="submit">Submit</button>
      </form>
    </div>;
  }
}

module.exports = Entry;
