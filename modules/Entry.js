import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.entry}</h2>
        <div class="input-field col s12">
          <select>
            <option value="" disabled selected>Type</option>
            <option value="New Moon">New Moon</option>
            <option value="Full Moon">Full Moon</option>
            <option value="Rest">Rest</option>
            <option value="Practice">Practice</option>
          </select>
          <label>Type</label>
        </div>
      </div>
    )
  }
})
