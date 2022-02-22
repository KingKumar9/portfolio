import React from 'react';

class Header extends React.Component {
    render() {
        return (
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
        )
    }
}

export default Header;