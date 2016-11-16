import React from 'react'
import axios from 'axios'

export default class Photos extends React.Component {
  constructor(props) {
    super(props)

    // const postures = axios()
    const postures = [`Bakasana`, `Malasana`, `Utanasana`, `Chaturunga Dandasana`]

    this.props = { postures: postures }

    const renderPostures = (postures) => {
      for (var i = 0; i < postures.length; i++) {
        <option>postures[i]</option>
      }
    }


    this.state = {
      posture: ''
    }

    this.handlePosture = this.handlePosture.bind(this)
  }

  handlePosture(e) {
    this.setState({ posture: e.target.value })
  }

  render() {
    return (
      <div>
        <select value={this.state.posture} onChange={this.handlePosture.bind(this)}/>
        {renderPostures(postures)}
      </div>
    )
  }
}
