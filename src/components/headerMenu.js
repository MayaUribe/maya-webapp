import React, { Component } from 'react';
import logo from '../img/logo-130.png';
import FaBars from '../../node_modules/react-icons/lib/fa/bars';
import { Link, browserHistory } from 'react-router';

class HeaderMenu extends Component {

  _renderMenuPages() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to='/'>Portfolio</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
        </li>
      </ul>
    );
  }

  _renderMenuHome() {
    return (
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
    );
  }

  render() {
    let currentRouteName = browserHistory.getCurrentLocation().pathname;
    let classes = "navbar navbar-expand-lg navbar-dark fixed-top";
    classes = (currentRouteName.indexOf('project') !== -1) ? classes + " navbar-shrink" : classes;

    return (
      <nav className={classes} id="mainNav">
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger" to="/">
            <img src={logo} width={42} alt="Maya Logo"/>
            Maya Uribe
          </Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <FaBars className="icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            {(currentRouteName.indexOf('project') !== -1) ? this._renderMenuPages() : this._renderMenuHome()}
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderMenu;
