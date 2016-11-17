// import React from 'react'
// import axios from 'axios'
//
// export default class Photos extends React.Component {
//   constructor(props) {
//     super(props)
//     const postures = [`Bakasana`, `Malasana`, `Utanasana`, `Chaturunga Dandasana`]
//
//     this.props = { postures: postures }
// 
//     this.state = {
//       posture: ''
//     }
//   }
//
//
//   render() {
//     return (
//       <div>
//         <h1>Hello!!</h1>
//         {/* <select value={this.state.posture} onChange={this.handlePosture.bind(this)}> */}
//           {/* <option>{this.props.postures}</option> */}
//         {/* </select> */}
//       </div>
//     )
//   }
// }
//
//
//
//
// // handlePosture(e) {
// //   this.setState({ posture: e.target.value })
// // }
// //
// // this.handlePosture = this.handlePosture.bind(this)
//
//
// import React, {Component} from 'react'
// import axios from 'axios'
// const API_URL = `/api/postures/`
//
// const poses = []
// const poseOptions = []
//
// const getPoses = () => {
//   axios.get(API_URL).then(res => {
//     res.data.forEach((pose, index) => {
//       this.poseOptions.push(<option key={index}>{pose}</option>)
//     })
//   }).then(() => {
//     $('select').material_select()
//   })
// }
//
// const Photos = React.createClass({
//   getInitialState () {
//     return { poseOptions: this.props.poseOptions }
//   },
//
//   render() {
//       return (
//           <div className="input-field col s12">
//             <select>
//               {poseOptions}
//             </select>
//           </div>
//       )
//   }
// })
//
// export default Photos
