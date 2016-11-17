import React from 'react'

export default React.createClass ({
// var Type = React.createClass ({
  render: function() {
    return(
        <div className="input-field col s12">
          <select value={this.props.label}>
            <option value="" disabled>Type</option>
            <option value="New Moon">New Moon</option>
            <option value="Full Moon">Full Moon</option>
            <option value="Rest">Rest</option>
            <option value="Practice">Practice</option>
          </select>
          <label>Type</label>
        </div>
    )
  }
})


// export default React.createClass({
// getInitialState: function() {
//   return {
//     type: 'test',
//     series: '',
//     notes: '',
//     posture: ''
//       }
// },
//
// handleChange: function(event) {
//   // event.preventDefault()
//   console.log('event.target.value', event.target.value);
//   this.setState({type: event.target.value})
// },
//
// handleSubmit:function (event) {
//   event.preventDefault()
//
//   console.log('i was submitted')
//   this.setState({type: 'my type state just changed!!!'})
//   console.log('this.state', this.state);
//
//   let data = {
//     type: this.state.type,
//     // date: this.state.date,
//     series: this.state.series,
//     notes: this.state.notes,
//     photo: this.state.photo,
//     posture: this.state.posture
//   }
//
//   // submit form via ajax
//   // $.ajax({
//   //   type: 'POST',
//   //   utl: '/api/entries',
//   //   data: data
//   // })
//   // .done(function(data) {
//   //   self.clearForm()
//   // })
//   // .fail(function() {
//   //   console.log('Failed to send');
//   // })
//
// },
//
//   render:function() {
//     return (
//       <div>
//         <h2>{this.props.params.entry}</h2>
//       <form onSubmit={this.handleSubmit}>
//         <label>{this.state.type}</label>
//         <div className="input-field col s12">
//           <select value={this.state.type} onChange={this.handleChange}>
//             <option value="" disabled>Type</option>
//             <option value="New Moon">New Moon</option>
//             <option value="Full Moon">Full Moon</option>
//             <option value="Rest">Rest</option>
//             <option value="Practice">Practice</option>
//           </select>
//           <label>Type</label>
//         </div>
// {/*
//         <div className="row">
//           <div className="input-field col s12">
//             <input value="Need a date" readOnly={true} id="date" type="text" className="validate"/>
//             <label className="active" htmlFor="date">Date</label>
//           </div>
//         </div>
//
//         <div className="input-field col s12">
//           <select  value={this.state.series} onChange={this.handleChange}>
//             <option value="suna">Sun A</option>
//             <option value="sunb">Sun B</option>
//             <option value="3">3</option>
//           </select>
//           <label>How far did you get?</label>
//         </div>
//
//         <div className="row col s12">
//               <div className="row">
//                 <div className="input-field col s12">
//                   <textarea value={this.state.notes} onChange={this.handleChange} id="notes" className="materialize-textarea"></textarea>
//                   <label htmlFor="notes">Notes</label>
//                 </div>
//               </div>
//           </div>
//
//             <div className="file-field input-field">
//               <div className="btn">
//                 <span>Photo</span>
//                 <input type="file" accept="image/*" capture="camera"/>
//               </div>
//               <div className="file-path-wrapper">
//                 <input className="file-path validate" type="text"/>
//               </div>
//             </div>
//
//           <div className="input-field col s12">
//             <select value={this.state.posture} onChange={this.handleChange}>
//               <option value="posture">Posture</option>
//               <option value="bakasana">Bakasana</option>
//               <option value="2">Option 2</option>
//               <option value="3">Option 3</option>
//             </select>
//             <label>Posture</label>
//           </div> */}
//
//           <input type="submit" value="Submit" />
//
//         </form>
//
//       </div>
//     )
//   }
// })
