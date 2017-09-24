import React, { Component } from 'react';
import FaPlus from '../../node_modules/react-icons/lib/fa/plus';
import {PROJECTS} from '../data/projects';

class Portfolio extends Component {
  _renderTagRow(tag, i) {
    return(
      <span key={i} className="badge badge-pill">{tag}</span>
    )
  }

  _renderTags(tags) {
    let tagsRow = [];
    let self = this;
    tags.forEach((tag, i) => {
      tagsRow.push(self._renderTagRow(tag, i));
    });

    return (
      tagsRow
    );
  }

  _renderProjectRow(project, i) {
    return(
      <div key={i} className="col-md-4 col-sm-6 portfolio-item">
        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <FaPlus className="fa-3x" />
            </div>
          </div>
          <img className="img-fluid" src={project.thumbnail} alt=""/>
        </a>
        <div className="portfolio-caption">
          <h4>{project.name}</h4>
          {this._renderTags(project.tags)}
        </div>
      </div>
    );
  }

  _renderProjects() {
    let projectsRow = [];
    let self = this;
    PROJECTS.forEach((project, i) => {
      projectsRow.push(self._renderProjectRow(project, i));
    });

    return (
      projectsRow
    );
  }

  render() {
    return (
      <section className="bg-light" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Portfolio</h2>
              <h3 className="section-subheading text-muted">Here are some samples of the work I've done.</h3>
            </div>
          </div>
          <div className="row">
            {this._renderProjects()}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
