import React from 'react'
import axios from 'axios'

const postures = [`Bakasana`, `Malasana`, `Utanasana`, `Chaturunga Dandasana`].map((name, index) => {
  return <option key={index}>{name}</option>
})

export default class Photos extends React.Component {
  constructor(props) {
    super(props)

    // const postures = axios()
    // const postures = [`Bakasana`, `Malasana`, `Utanasana`, `Chaturunga Dandasana`]

    // this.props = { postures: postures }

    this.state = {
      posture: ''
    }

    this.handlePosture = this.handlePosture.bind(this)

  // const RenderPostures = () => {
  //
  //   return postures.map((name, index) => {
  //     return <option key={index}>{name}</option>
  //   })
  // }

  }


  handlePosture(e) {
    this.setState({ posture: e.target.value })
  }

  render() {
    return (
      <div>
        <select value={this.state.posture} onChange={this.handlePosture.bind(this)}>
          {postures}
        </select>
      </div>
    )
  }
}
