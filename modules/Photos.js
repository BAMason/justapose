import React from 'react';
import axios from 'axios';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { postures: [], filter: `` };

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

  render() {
    $(document).ready(() => {
      $(`input.autocomplete`).autocomplete({
        data: this.state.postures,
      });
    });

    return <div>
      <input type="text" id="autocomplete-input" className="autocomplete" />
      <label htmlFor="autocomplete-input">Posture</label>
    </div>;
  }
}

module.exports = Photos;
