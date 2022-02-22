import React from 'react';

class Body extends React.Component {
    render() {
        return (
            <div className='body'>
                <div className='card'></div>
                <div className='text'>
                    <div>
                        <h2>Entrepeneur</h2>
                        <p>Business Owner</p>
                        <p>Freelancer</p>
                        <p>Tutor</p>
                    </div>
                    <div>
                        <h2>UI/UX Designer</h2>
                        <p>Figma</p>
                        <p>Adobe XD</p>
                        <p>Sketch</p>
                    </div>
                    <div>
                        <h2>Programmer / Web Developer / App Creator</h2>
                        <p>HTML5, CSS3, Javascript</p>
                        <p>Python & Swift</p>
                        <p>React, jQuery, Bootstrap & Sass</p>
                    </div>
                    <div>
                        <h2>Graphic Designer (2D & 3D)</h2>
                        <p>Blender</p>
                        <p>Adobe Illustrator</p>
                        <p>Canva</p>
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