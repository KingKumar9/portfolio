/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.alertPopUp = this.alertPopUp.bind(this)
    }

    alertPopUp = () => {
        alert('download successful!!');
    }

    render() {
        return (
            <div className='body'>

                <div className='card'>
                    <div className='pic'>
                        <img 
                        src='https://i.pinimg.com/originals/34/28/4b/34284bb8f5fbbdc243e8d3afd3c6f8d8.jpg' 
                        alt='Profile Picture' 
                        />
                    </div>

                    <div className='info'>
                        <div>
                            <p>rajat kumar</p>
                        </div>
                        <div>
                            <p>0430585812</p>
                        </div>
                        <div>
                            <p>rajatk12199@gmail.com</p>
                        </div>
                    </div>

                    <div className='overview'>
                        <div>
                            <h4>about me</h4>
                            <div className='github-icon'>
                                <a  href='https://github.com/KingKumar9'>
                                    <FontAwesomeIcon icon={ faGithub } />
                                </a>
                            </div>
                            <div className='linkedin-icon'>
                                <a href='https://www.linkedin.com/in/rajat-kumar-66ba72175/'>
                                    <FontAwesomeIcon icon={ faLinkedin } />
                                </a>
                            </div>
                        </div>
                        
                        <p>
                            I am currently 23 years old, I have been in the tech industry since I was 19.
                            As a self taught developer who is deeply fascinated by technology and art, 
                            I enjoy working on my craft and challenging myself.
                            You could say i'm a jack of all trades.
                        </p>
                    </div>

                    <div className='github-icon'>
                        
                    </div>

                    <div className='linkedin-icon'>
                        
                    </div>

                    <a className='cv' onClick={ this.alertPopUp } href='rajatkumar-cv.docx' download>
                        <FontAwesomeIcon icon={ faArrowAltCircleDown } />
                        <p>download cv</p>
                    </a>
                </div>

                <div className='text'>
                    <div>
                        <h2>UI/UX Designer</h2>
                        <p>Figma</p>
                        <p>Adobe XD</p>
                        <p>Sketch</p>
                    </div>
                    <div>
                        <h2>Web Developer / Programmer</h2>
                        <p>HTML5, CSS3, Javascript</p>
                        <p>Python & Swift</p>
                        <p>React, jQuery, Bootstrap & Sass</p>
                    </div>
                    <div>
                        <h2>Graphic Designer (2D & 3D)</h2>
                        <p>Blender</p>
                        <p>Adobe Illustrator</p>
                        <p>Adobe Photoshop</p>
                    </div>
                    <div>
                        <h2>Video Editor</h2>
                        <p>Adobe After Effects</p>
                        <p>Adobe Premiere Pro</p>
                        <p>Final Cut Pro</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;