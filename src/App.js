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
      body: <Homepage />,
      hActive: true,
      pActive: false,
      eActive: false
    }
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick = (e) => {
    e.preventDefault();
    let linkId = e.target.id;

    switch (linkId) {
      case 'h':
        this.setState({
          body: <Homepage />,
          hActive: true,
          pActive: false,
          eActive: false
        })
        break;
      case 'p':
        this.setState({
          body: <Projects />,
          hActive: false,
          pActive: true,
          eActive: false
        })
        break;
      case 'e':
        this.setState({
          body: <Experience />,
          hActive: false,
          pActive: false,
          eActive: true
        })
        break;
      default:
        break;
    }
  }
  

  render() {
    const activeButton = {
      backgroundColor: '#171515',
      fontWeight: 600
    }

    return (
      <div className='container'>
        <div className='header'>
          <div className='name'>
            <h1>rajat kumar</h1>
          </div>
          <div className='links'>
            <button id='h' style={ this.state.hActive ? activeButton : null } onClick={ this.handleClick }>homepage</button>
            <button id='p' style={ this.state.pActive ? activeButton : null } onClick={ this.handleClick }>projects</button>
            <button id='e' style={ this.state.eActive ? activeButton : null } onClick={ this.handleClick }>experience</button>
          </div>
        </div>

        { this.state.body }

        <div className='footer'>
          <p>made with react & fontawesome</p>
        </div>
      </div>
    )
  }
}

export default App;