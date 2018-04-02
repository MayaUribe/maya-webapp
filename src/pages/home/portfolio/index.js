import React, { Component } from 'react';
import FaPlus from '../../../../node_modules/react-icons/lib/fa/plus';
import { PROJECTS } from '../../../data/projects';
import { Link } from 'react-router';

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
    let projectLink = '/project/' + project.id;

    return(
      <div key={i} className="col-md-4 col-sm-6 portfolio-item">
        <Link className="portfolio-link" to={projectLink}>
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <FaPlus className="fa-3x" />
            </div>
          </div>
          <img className="img-fluid" src={project.thumbnail} alt=""/>
        </Link>
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
              <h3 className="section-subheading text-muted">
                Here are some of the projects I've worked with.
                <div className="note">
                  <strong>NOTE:</strong> Because of confidentiality reasons most of the project names are changed and also the variable names in the code, this is not the whole code, it's just a small sample.
                </div>
              </h3>
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
