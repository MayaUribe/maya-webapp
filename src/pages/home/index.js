import React, { Component } from 'react';
import '../../App.css';
import '../../index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Portfolio from '../../pages/home/portfolio/index';

class Home extends Component {
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

export default Home;
