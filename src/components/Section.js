import React, { Component } from 'react'


export default class Section extends Component {

  render() {
    return (
      <div id={this.props.id} className={this.props.className}>
        <div className="center container">
          {this.props.children}
        </div>
      </div>
    )
  }

}