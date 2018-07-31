import React, { Component } from 'react'


export default class ProjectList extends Component {

  render() {
    return (
      <div className="flex-container container">
        {this.props.projects.map((project) => (
          <div className="project-card flex-item flex-container">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={project.logo} className="logo flex-item" alt="PitchCast logo"/>
            </a>
            <div className="details flex-item">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="title">{project.title}</a>
              <p className="description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

}