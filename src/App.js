import React, { Component } from 'react'
import logo from './img/jt-mark.svg'
import dubya from './img/dubya.JPG'
import pitchcast_logo from './img/pitchcast_300x300.jpg'
import nlb_logo from './img/nlb_300x300.jpeg'
import vtool_logo from './img/vtool_300x300.jpeg'
import ontime_logo from './img/ontime_300x300.jpeg'
import linkedin_logo from './img/linkedin.png'
import github_logo from './img/github.png'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="header dark-blue-bg">
          <div className="center">
            <div className="menu flex-container">
              <div className="brand flex-item">
                <a><img src={logo} alt="'jt' brand mark"/></a>
              </div>
              <div className="links flex-item">
                <ul>
                  <li><a href="#about">about</a></li>
                  <li><a href="#projects">projects</a></li>
                  <li><a href="#contact">contact</a></li>
                </ul>
              </div>
            </div>

            <div className="header-message container">
              <div>
                <h1>Jan Timpe</h1>
                <p>Software engineer, Fayetteville, AR</p>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className="purple-bg">
          <div className="center container">
            <h2>about</h2>
            <p>I'm Jan, a web and mobile application developer currently pursuing a degree in Computer Science from the University of Arkansas. My life revolves around baseball, code, heavy metal, and lifting weights.</p>

            <div className="flex-container">
              <div className="stat-card flex-item">
                <span className="title">squat</span>
                <span className="value">315</span>
              </div>
              <div className="stat-card flex-item">
                <span className="title">bench press</span>
                <span className="value">235</span>
              </div>
              <div className="stat-card flex-item">
                <span className="title">overhead press</span>
                <span className="value">145</span>
              </div>
              <div className="stat-card flex-item">
                <span className="title">snatch</span>
                <span className="value">165</span>
              </div>
              <div className="stat-card flex-item">
                <span className="title">deadlift</span>
                <span className="value">385</span>
              </div>
              <div className="stat-card flex-item">
                <span className="title">clean and jerk</span>
                <span className="value">215</span>
              </div>
            </div>

            <iframe title="Spotify player" src="https://open.spotify.com/embed/user/1237272048/playlist/6uj7glncPio4gEztTyM7pA" frameborder="0" allowtransparency="true" className="spotify-player"></iframe>

          </div>
        </div>

        <div id="projects" className="dark-blue-bg">
          <div className="center container">
            <h2>projects</h2>
            <p>Essentially all of my personal and freelance projects involve baseball; it's a game of statistics and I love statistics. Various other mini-projects and academic projects exist <a href="https://github.com/jan-timpe" target="_blank">on my Github</a>.</p>
            <br/>

            <div className="flex-container container">
              <div className="project-card flex-item flex-container">
                <a href="https://pitchcastapp.com/" target="_blank">
                  <img src={pitchcast_logo} className="logo flex-item" alt="PitchCast logo"/>
                </a>
                <div className="details flex-item">
                  <a href="https://pitchcastapp.com/" target="_blank" className="title">pitchcast</a>
                  <p className="description">A pitching chart and progress tracker for baseball and softball. An ongoing personal project (my baby)</p>
                </div>
              </div>

              <div className="project-card flex-item flex-container">
                <a href="https://vtoolapp.com/" target="_blank">
                  <img src={vtool_logo} className="logo flex-item" alt="Five Tool Showcases logo"/>
                </a>
                <div className="details flex-item">
                  <a href="https://vtoolapp.com/" target="_blank" className="title">five tool</a>
                  <p className="description">App developed for a series of elite baseball tournaments across several states, including Arkansas, Texas, and Oklahoma.</p>
                </div>
              </div>
              <div className="project-card flex-item flex-container">
                <a href="http://nlbbaseball.com/" target="_blank">
                  <img src={nlb_logo} className="logo flex-item" alt="Next Level Baseball logo"/>
                </a>
                <div className="details flex-item">
                  <a href="http://nlbbaseball.com/" target="_blank" className="title">next level baseball</a>
                  <p className="description">Website and custom facility scheduling system developed for a growing Springdale-based small business.</p>
                </div>
              </div>
              <div className="project-card flex-item flex-container">
                <a href="https://ontimebaseball.com/" target="_blank">
                  <img src={ontime_logo} className="logo flex-item" alt="OnTime Baseball logo"/>
                </a>
                <div className="details flex-item">
                  <a href="https://ontimebaseball.com/" target="_blank" className="title">on time baseball</a>
                  <p className="description">A batter timing app designed to help hitters improve timing by associating visual cues with audio training.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="purple-bg">
          <div className="center container">
          <h2>contact</h2>

          <div className="social">
            <a href="https://www.linkedin.com/in/jantimpe" target="_blank">
              <img src={linkedin_logo} alt="LinkedIn logo"/>
            </a>
            <a href="https://github.com/jan-timpe" target="_blank">
              <img src={github_logo} alt="GitHub logo"/>
            </a>
          </div>

          <p><em>Note:</em> I will not respond to message from any Nigerian prince.</p>
          <br/>
          <img src={dubya} className="dubya" alt="George W. Bush 'you fool me once.....'"/>

        </div>
      </div>
      </div>
    )
  }
}
