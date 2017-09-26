import React, { Component } from 'react';
import HeaderMenu from "../../components/headerMenu";
import Footer from "../../components/footer";
import { browserHistory } from 'react-router';
import { PROJECTS } from '../../data/projects';
import _ from 'lodash';
import Highlight from 'react-highlight';
import ChevronLeft from '../../../node_modules/react-icons/lib/fa/chevron-left';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {}
    };
  }

  componentDidMount() {
    this._setProject();
  }

  _setProject() {
    let currentRouteName = browserHistory.getCurrentLocation().pathname;
    let array = currentRouteName.split('/');
    let projectId = array[2];

    let project = _.find(PROJECTS, function(p) {
      return p.id.toString() === projectId;
    });

    this.setState({project});
  }

  _handleGoToPage() {
    browserHistory.push('/');
  }

  _renderHeader() {
    return (
      <section className="bg-project" id="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-right back-button">
              <button type="button" className="btn btn-default btn-circle btn-xl" onClick={this._handleGoToPage.bind(this)}>
                <ChevronLeft/>
              </button>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
              <h2 className="project-title">{this.state.project.name}</h2>
              {this._renderProjectSummary()}
            </div>
          </div>
        </div>
      </section>
    );
  }

  _renderTagRow(tag, i) {
    return(
      <span key={i} className="badge badge-pill">{tag}</span>
    );
  }

  _renderTags() {
    let tagsRow = [];
    let self = this;
    if (this.state.project && this.state.project.tags) {
      this.state.project.tags.forEach((tag, i) => {
        tagsRow.push(self._renderTagRow(tag, i));
      });
    }

    return (
      tagsRow
    );
  }

  _renderProjectSummary() {
    return (
      <div id="summary" className="container">
        <div className="project-description">
          {this.state.project.description}
        </div>
        <div>
          {this._renderTags()}
        </div>
      </div>
    );
  }

  _renderCodeRow(file, code, i) {
    return (
      <div key={i} className="code-container">
        <label>{file}</label>
        <Highlight language='javascript'>
          {code}
        </Highlight>
      </div>
    );
  }

  _renderCode() {
    let codeRow = [];
    let self = this;
    if (this.state.project && this.state.project.sampleCodes) {
      this.state.project.sampleCodes.forEach((sampleCode, i) => {
        codeRow.push(self._renderCodeRow(sampleCode.file, sampleCode.code, i));
      });
    }

    return (
      codeRow
    );
  }

  _renderProjectCode() {
    return (
      <section className="bg-light" id="detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <label className="sample-code">Sample Code</label>
              {this._renderCode()}
            </div>
          </div>
        </div>
      </section>
    );
  }

  _renderProject() {
    return (
      <div>
        {this._renderHeader()}
        {this._renderProjectCode()}
      </div>
    );
  }

  render() {
    return (
      <div>
        <HeaderMenu/>
        {this._renderProject()}
        <Footer/>
      </div>
    );
  }
}

export default Project;
