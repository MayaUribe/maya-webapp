import React, { Component } from 'react';
import logo from '../img/logo-130.png';
import FaBars from '../../node_modules/react-icons/lib/fa/bars';

class Header extends Component {
  _renderHeaderMenu() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <img src={logo} width={42}/>
            Maya Uribe
          </a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <FaBars className="icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#page-top">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  _renderHeaderIntro() {
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading">I'm a Software Developer</div>
            <div className="intro-lead-in">Hi there! My name is Maria Alejandra and I'm a Software Developer, I’m passionate about what I do, I’m a self taught person, and I’m always willing to learn new things.</div>
            <a className="btn btn-xl btn-md btn-xs js-scroll-trigger" href="#footer">Contact Me</a>
          </div>
        </div>
      </header>
    )
  }

  render() {
    return (
      <div>
        {this._renderHeaderMenu()}
        {this._renderHeaderIntro()}
      </div>
    );
  }
}

export default Header;
