import React, { Component } from 'react';
import FaTwitter from '../../node_modules/react-icons/lib/fa/twitter';
import FaFacebook from '../../node_modules/react-icons/lib/fa/facebook';
import FaLinkedIn from '../../node_modules/react-icons/lib/fa/linkedin';
import ChevronUp from '../../node_modules/react-icons/lib/fa/chevron-up';
import $ from 'jquery';

class Footer extends Component {
  handleUpClick() {
    $('body,html').animate({
      scrollTop : 0
    }, 500);
  }

  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; Maya Uribe 2023</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="https://twitter.com/mayauribe">
                    <FaTwitter/>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/maria.a.uribe.56">
                    <FaFacebook/>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/mayauribe/?locale=en_US">
                    <FaLinkedIn/>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  mariale.uribe@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        <a href="javascript:" id="return-to-top" onClick={this.handleUpClick.bind(this)}>
          <ChevronUp className="chevron-up" />
        </a>
      </footer>
    );
  }
}

export default Footer;
