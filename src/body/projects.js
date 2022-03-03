import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import portfolio from './project-images/portfolio.png';
import randomQuoteMachine from './project-images/random-quote-machine.png';
import markdownPreviewer from './project-images/markdown-previewer.png';
import drumMachine from './project-images/drum-machine.png';
import javascriptCalculator from './project-images/javascript-calculator.png';
import pomodoroClock from './project-images/pomodoro-clock.png';



const projects = [
    {
        img: randomQuoteMachine,
        title: 'random quote machine',
        github: 'https://github.com/KingKumar9/Random-Quote-Machine',
        website: 'https://kingkumar9.github.io/Random-Quote-Machine/'
    },
    {
        img: markdownPreviewer,
        title: 'markdown previewer',
        github: 'https://github.com/KingKumar9/markdown-previewer',
        website: 'https://kingkumar9.github.io/markdown-previewer/'
    },
    {
        img: drumMachine,
        title: 'drum machine',
        github: 'https://github.com/KingKumar9/drum-machine',
        website: 'https://kingkumar9.github.io/drum-machine/'
    },
    {
        img: javascriptCalculator,
        title: 'javascript calculator',
        github: 'https://github.com/KingKumar9/javascript-calculator',
        website: 'https://kingkumar9.github.io/javascript-calculator/'
    },
    {
        img: pomodoroClock,
        title: 'pomodoro clock',
        github: 'https://github.com/KingKumar9/pomodoro-clock',
        website: 'https://kingkumar9.github.io/pomodoro-clock/'
    },
    {
        img: portfolio,
        title: 'portfolio',
        github: 'https://github.com/KingKumar9/portfolio',
        website: 'https://kingkumar9.github.io/portfolio/'
    }
]



class Projects extends React.Component {
    render() {
        return (
            <div className='body'>
                <div className='projects'>

                    { 
                        projects.map(proj => {
                            return <div className='project-card'>
                                <div className='project-img'>
                                    <img src={ proj.img } alt={ proj.title } />
                                </div>
                                <div className='project-title'>
                                    <h3>{ proj.title }</h3>
                                </div>
                                <div className='project-links'>
                                    <a href={ proj.github }  target='_blank' rel='noreferrer' className='project-github'>
                                        <FontAwesomeIcon icon={ faGithub } />
                                    </a>
                                    <a href={ proj.website } target='_blank' rel='noreferrer' className='project-site'>
                                        <FontAwesomeIcon icon={ faLink } />
                                    </a>
                                </div>
                            </div>
                        }) 
                    }

                </div>
            </div>
        )
    }
}

export default Projects;