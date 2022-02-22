import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div>
                    <a className='github-icon' href='https://github.com/KingKumar9'>
                        <FontAwesomeIcon icon={ faGithub } />
                    </a>
                </div>
                <div>
                    <a className='cv' href='rajatkumar-cv.docx' download>
                        <button><FontAwesomeIcon icon={ faArrowAltCircleDown } /> download cv</button>
                    </a>
                </div>
                <div>
                    <a className='linkedin-icon' href='https://www.linkedin.com/in/rajat-kumar-66ba72175/'>
                        <FontAwesomeIcon icon={ faLinkedin } />
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer;