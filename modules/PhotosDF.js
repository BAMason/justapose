import React from 'react'
import axios from 'axios'

export default class Photos extends React.Component {
  constructor(props) {
    super(props)
    const postures = [`Bakasana`, `Malasana`, `Utanasana`, `Chaturunga Dandasana`]

    this.props = { postures: postures }

    this.state = {
      posture: ''
    }
  }


  render() {
    return (
      <div>
        <h1>Hello!!</h1>
        {/* <select value={this.state.posture} onChange={this.handlePosture.bind(this)}> */}
          {/* <option>{this.props.postures}</option> */}
        {/* </select> */}
      </div>
    )
  }
}




// handlePosture(e) {
//   this.setState({ posture: e.target.value })
// }
//
// this.handlePosture = this.handlePosture.bind(this)
