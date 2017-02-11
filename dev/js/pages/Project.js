import React from "react";
import { Link } from "react-router";

import projectStore from "../data/projectStore"

export default class Projects extends React.Component {
  render() {

    const { params } = this.props;
    const { projectParam } = params;
    
    let project,
        pageContent,
        projectFrame,
        linkButton;

    project = projectStore.getProject(projectParam);


    if (project.linkURL) {
      linkButton = (
        <a href={project.linkURL}>Se projektet!</a>
      );
    } else {
      linkButton = false;
    }

    if (project.frameURL) {
      projectFrame = (
        <div class="project-showcase">
          <iframe
            class="inside"
            scrolling="auto"
            title="Step by step form"
            src={project.frameURL}
            frameBorder="no"
            allowTransparency="true"
            allowFullScreen="true">
          </iframe>
        </div>
      )
    } else {
      projectFrame = (
        <div/>
      )
      // projectFrame = (
      //   <div class="project-showcase" style={{
      //     backgroundImage: project.backgroundURL
      //   }}/>
      // )
    }

    let copy = '';
    if (project.hasOwnProperty('html')) {
      copy = project.html();
    }

    pageContent = (
      <div id="article">
        {projectFrame}
        <div class="article-head">
          <h2>{project.title}</h2>
        </div>
        <div class="article-body">

          {linkButton}
          {copy}
        </div>
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
      <section>
        {pageContent}
      </section>
    );

  }
}