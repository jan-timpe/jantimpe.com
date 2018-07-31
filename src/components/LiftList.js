import React, { Component } from 'react'


export default class LiftList extends Component {

  render() {
    return (
      <div className="flex-container">
        {this.props.lifts.map((lift) => (
          <div className="stat-card flex-item">
            <span className="title">{lift.title}</span>
            <span className="value">{lift.value}</span>
          </div>
        ))}
      </div>
    )
  }

}