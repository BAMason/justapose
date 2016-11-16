import React, {Component} from 'react'
import axios from 'axios'
const API_URL = `/api/postures/`

axios.get(API_URL)

const poses = [`Bakasana`, `Malasana`, `Utanasana`, `Chaturunga Dandasana`].map((name, index) => {
  return <option key={index}>{name}</option>
})

export default class Photos extends React.Component {
    render() {
        return (
            <div>
              <form>
                <select>
                  <option disabled selected>Choose A Pose</option>
                  {poses}
                </select>
              </form>
            </div>
        )
    }
}
