import React, { Component } from 'react'
import logo from '../img/jt-mark.svg'

export default class Header extends Component {

  render() {
    return (
      <nav className="header dark-blue-bg">
        <div className="center">
          <div className="menu flex-container">
            <div className="brand flex-item">
              <a><img src={this.props.logo} alt="Logo"/></a>
            </div>
            <div className="links flex-item">
              <ul>
                {this.props.links.map((link) => (
                  <li><a href={link.href}>{link.text}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="header-message container">
            <div>
              {this.props.children}
            </div>
          </div>
        </div>
      </nav>
    )
  }

}
