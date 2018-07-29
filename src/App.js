import React, { Component } from 'react';
import logo from './img/jt-mark.svg';


export default class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <nav style={styles.navigationContainer}>
          <div style={styles.left}>
            <img src={logo} alt="JT logo" style={styles.logo}/>
          </div>
          <div style={styles.right}>
            <ul style={styles.navigationItems}>
              <li style={styles.navigationItem}>
                about
              </li>
              <li style={styles.navigationItem}>
                projects
              </li>
              <li style={styles.navigationItem}>
                contact
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const styles = {
  container: {
    maxWidth: 1068,
    margin: '0px auto',
    padding: 12
  },
  navigationContainer: {
    fontFamily: 'monospace',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 44
  },
  navigationItems: {
    listStyleType: 'none',
  },
  left: {
    flex: 1
  },
  right: {
    flex: 1,
    textAlign: 'right'
  },
  navigationItem: {
    padding: '0px 12px',
    display: 'inline-block'
  }
}
