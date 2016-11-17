import React from 'react';
import axios from 'axios';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { postures: [], filter: `` };

    axios.get(`/api/postures`)
    .then((data) => {
      return data.data.map((each) => {
        return <option key={each.id}>{each.name}</option>;
      });
    })
    .then((eles) => {
      this.setState({ postures: eles });
    })
    .catch((err) => console.error(err));
  }

  render() {
    $(document).ready(() => {
      $(`select`).material_select();
    });

    return <div>
      <select>
        {this.state.postures}
      </select>
      <span>{this.state.filter}</span>
    </div>;
  }
}

module.exports = Photos;
