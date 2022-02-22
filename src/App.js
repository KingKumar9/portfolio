import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faReact, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        
        <div className='header'>
          <div className='name'>
            <h1>rajat kumar</h1>
          </div>
          <div className='links'>
            <button>Home</button>
            <button>Projects</button>
            <button>Experience</button>
          </div>
        </div>

        <div className='body'>
          <div className='card'></div>
          <div className='text'></div>
        </div>

        <div className='footer'>
          <div>
            <a className='cv' href='rajatkumar-cv.docx' download>
              <button><FontAwesomeIcon icon={ faArrowAltCircleDown } /> download cv</button>
            </a>
          </div>
          <div className='footer-text'>
            <h4 className='madewith-text'>made with</h4>
            <div className='icons'>
              <span className='react-icon'>react <FontAwesomeIcon icon={ faReact } /></span>
              <span className='fontawesome-icon'>font awesome <FontAwesomeIcon icon={ faFontAwesome } /></span>
            </div>
          </div>
          <div className='profiles'>
            <a className='github-icon' href='https://github.com/KingKumar9'>
              <FontAwesomeIcon icon={ faGithub } />
            </a>
            <a className='linkedin-icon' href='https://www.linkedin.com/in/rajat-kumar-66ba72175/'>
              <FontAwesomeIcon icon={ faLinkedin } />
            </a>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
