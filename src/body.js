import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

class Body extends React.Component {
    render() {
        return (
            <div className='body'>



                <div className='card'>
                    <div style={{ display: 'none' }}>  {/* Remove Style */}
                        <a className='github-icon' href='https://github.com/KingKumar9'>
                            <FontAwesomeIcon icon={ faGithub } />
                        </a>
                    </div>
                    <a className='cv' href='rajatkumar-cv.docx' download>
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

export default Body;