import React from "react";
import { Link } from "react-router";

import projectStore from "../data/projectStore"

export default class Projects extends React.Component {
  render() {

    const { params } = this.props;
    const { projectParam } = params;
    
    let project,
        pageContent,
        projectFrame;

    project = projectStore.getProject(projectParam);
    
    if (project.frameURL) {
      projectFrame = (
        <iframe
          class="inside"
          scrolling="auto"
          title="Step by step form"
          src={project.frameURL}
          frameBorder="no"
          allowTransparency="true"
          allowFullScreen="true">
        </iframe>
      )
    } else {
      projectFrame = (
        <div style={{
          backgroundImage: project.backgroundURL
        }}/>
      )
    }

    let copy = '';
    if (project.hasOwnProperty('html')) {
      copy = project.html();
    }

    pageContent = (
      <div>
        <div class="project-showcase">
          {projectFrame}
        </div>
        <section>
          <h2>Projekt</h2>
          <h3>{project.name}</h3>
          {copy}
        </section>
      </div>
    );

    if (!project) {
      let pageContent = (
        <section class="intro">
          <h2>Error</h2>
        </section>
      );
    }

    return (
      <div>
        {pageContent}
      </div>
    );

  }
}