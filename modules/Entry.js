/* eslint-disable max-len, camelcase */

// import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { postures: [], data: [] };
    this.handleSubmit = this.handleSubmit.bind(this);

    const dataObj = {};
    const poses = {};

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
  }

  sendData(input) {
    const posture_id = this.state.postures[input.posture_id];
    let type_id;

    axios.get(`/api/types`)
    .then((data) => {
      data.data.forEach((type) => {
        if (type.name === input.type_id) { type_id = type.id; }
      });
    })
    .then(() => {
      input.type_id = type_id;
      input.posture_id = posture_id;
    })
    .then(() => {
      console.log(`pre axios input`, input);
      axios.post(`/api/entries`, input)
      axios({
        method: `post`,
        url: `/api/entries`,
        data: input,
        // headers: { 'Content-Type': `multipart/form-data` },
      })
      .then(() => console.log(`great success`))
      .catch(() => console.warn(`oh noes`));
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    const userId = JSON.parse(window.atob(cookie.load(`session`))).passport.user[0].id;
    const data = $(`#form`).serializeArray();
    if (userId) {
      formData.user_id = userId;
      data.forEach((field) => { formData[field.name] = field.value; });
      formData.photo = $(`#photo`).prop(`files`)[0];
      this.sendData(formData);
    }
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
          <option value="Rest">Rest</option>
          <option value="Practice">Practice</option>
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
        <button className="btn waves-effect waves-light" type="submit" name="submit">Submit</button>
      </form>
    </div>;
  }
}

module.exports = Entry;
