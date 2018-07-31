import React, { Component } from 'react'
import logo from './img/jt-mark.svg'
import dubya from './img/dubya.JPG'
import pitchcast_logo from './img/pitchcast_300x300.jpg'
import nlb_logo from './img/nlb_300x300.jpeg'
import vtool_logo from './img/vtool_300x300.jpeg'
import ontime_logo from './img/ontime_300x300.jpeg'
import lift_logo from './img/lift@0.5x.png'
import linkedin_logo from './img/linkedin.png'
import github_logo from './img/github.png'
import './App.css'


import Header from './components/Header'
import Section from './components/Section'
import LiftList from './components/LiftList'
import ProjectList from './components/ProjectList'

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Header logo={logo} links={[
          { href: '#about', text: 'about' },
          { href: '#projects', text: 'projects' },
          { href: '#contact', text: 'contact' }
        ]}>
          <h1>Jan Timpe</h1>
          <p>Software engineer, Northwest Arkansas</p>
        </Header>


        <Section id="about" className="purple-bg">
          <h2>about</h2>
            <p>I'm Jan, a web and mobile application developer. I graduated from the University of Arkansas in 2018 with a Bachelors of Science in Computer Science and a minor in Math. Currently, I work as an Associate Mobile Developer at J.B. Hunt. My life very heavily revolves around baseball, code, heavy metal, and lifting weights.</p>

            <LiftList lifts={[
              { title: 'squat', value: 315 },
              { title: 'bench press', value: 235 },
              { title: 'overhead press', value: 145 },
              { title: 'snatch', value: 165 },
              { title: 'deadlift', value: 385 },
              { title: 'clean and jerk', value: 215 },
            ]}/>

            <iframe title="Spotify player" src="https://open.spotify.com/embed/user/1237272048/playlist/6uj7glncPio4gEztTyM7pA" frameborder="0" allowtransparency="true" className="spotify-player"></iframe>
        </Section>

        <Section id="projects" className="dark-blue-bg">
          <h2>projects</h2>
          <p>Essentially all of my personal and freelance projects involve baseball; it's a game of statistics and I love statistics. Various other mini-projects and academic projects exist <a href="https://github.com/jan-timpe" target="_blank" rel="noopener noreferrer">on my Github</a>.</p>

          <br/>

          <ProjectList projects={[
            {
              title: 'pitchcast',
              url: 'https://pitchcastapp.com/',
              logo: pitchcast_logo,
              description: 'A pitching chart and progress tracker for baseball and softball. An ongoing personal project (my baby)'
            },
            {
              title: 'five tool',
              url: 'https://vtoolapp.com/',
              logo: vtool_logo,
              description: 'App developed for a series of elite baseball tournaments across several states, including Arkansas, Texas, and Oklahoma.'
            },
            {
              title: 'next level baseball',
              url: 'http://nlbbaseball.com',
              logo: nlb_logo,
              description: 'Website and custom facility scheduling system developed for a growing Springdale-based small business.'
            },
            {
              title: 'on time baseball',
              url: 'https://ontimebaseball.com',
              logo: ontime_logo,
              description: 'A batter timing app designed to help hitters improve timing by associating visual cues with audio training.'
            },
            {
              title: 'lift',
              url: 'https://lift.jantimpe.com',
              logo: lift_logo,
              description: 'My first progressive web app, an offline-only lift tracker built in React and deployed to GitHub Pages'
            }
          ]}/>
        </Section>

        <Section id="contact" className="purple-bg">
          <h2>contact</h2>

          <div className="social">
            <a href="https://www.linkedin.com/in/jantimpe" target="_blank" rel="noopener noreferrer">
              <img src={linkedin_logo} alt="LinkedIn logo"/>
            </a>
            <a href="https://github.com/jan-timpe" target="_blank" rel="noopener noreferrer">
              <img src={github_logo} alt="GitHub logo"/>
            </a>
          </div>

          <p><em>Note:</em> I will not respond to message from any Nigerian prince.</p>
          <br/>
          <img src={dubya} className="dubya" alt="George W. Bush 'you fool me once.....'"/>

        </Section>
      </div>
    )
  }
}
