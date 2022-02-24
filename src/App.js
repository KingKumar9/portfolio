/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import Homepage from './body/homepage.js';
import Projects from './body/projects.js';
import Experience from './body/experience.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: <Homepage />
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    e.preventDefault();
    let linkId = e.target.id;

    switch (linkId) {
      case 'h':
        this.setState({
          body: <Homepage />
        })
        break;
      case 'p':
        this.setState({
          body: <Projects />
        })
        break;
      case 'e':
        this.setState({
          body: <Experience />
        })
        break;
      default:
        break;
    }
  }
  

  render() {
    return (
      <div className='container'>
        <div className='header'>
          <div className='name'>
            <h1>rajat kumar</h1>
          </div>
          <div className='links'>
            <button id='h' onClick={ this.handleClick }>homepage</button>
            <button id='p' onClick={ this.handleClick }>projects</button>
            <button id='e' onClick={ this.handleClick }>experience</button>
          </div>
        </div>

        { this.state.body }

        <div className='footer'>
          <p>made with react, bootstrap & fontawesome</p>
        </div>
      </div>
    )
  }
}

export default App;