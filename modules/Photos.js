import React, {Component} from 'react'
import axios from 'axios'
const API_URL = `/api/postures/`

const poses = []
const poseOptions = []

const getPoses = () => {
  axios.get(API_URL).then(res => {
    res.data.forEach((pose, index) => {
      this.poseOptions.push(<option key={index}>{pose}</option>)
    })
  }).then(() => {
    $('select').material_select()
  })
}

const Photos = React.createClass({
  getInitialState () {
    return { poseOptions: this.props.poseOptions }
  },

  render() {
      return (
          <div className="input-field col s12">
            <select>
              {poseOptions}
            </select>
          </div>
      )
  }
})

export default Photos
