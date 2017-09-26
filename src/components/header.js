import React, { Component } from 'react';
import HeaderMenu from "./headerMenu";
import $ from 'jquery';

class Header extends Component {
  _handleGoToBottom() {
    $("html, body").animate({
      scrollTop: $(document).height()
    }, 1000);
  }

  _renderHeaderIntro() {
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading">I'm a Software Developer</div>
            <div className="intro-lead-in">Hi there! My name is Maria Alejandra and I'm a Software Developer, I’m passionate about what I do, I’m a self taught person, and I’m always willing to learn new things.</div>
            <a className="btn btn-xl btn-md btn-xs js-scroll-trigger contact-me-btn" onClick={this._handleGoToBottom.bind(this)}>Contact Me</a>
          </div>
        </div>
      </header>
    )
  }

  render() {
    return (
      <div>
        <HeaderMenu/>
        {this._renderHeaderIntro()}
      </div>
    );
  }
}

export default Header;
