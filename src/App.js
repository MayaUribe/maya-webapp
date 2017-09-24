import React, { Component } from 'react';
import './App.css';
import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import Portfolio from './portfolio/index';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Portfolio/>
        <Footer/>
      </div>
    );
  }
}

export default App;
