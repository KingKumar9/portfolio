import React from 'react';
import './App.css';
import Header from './header.js';
import Body from './body.js';
import Footer from './footer.js';


class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App;