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
        techList,
        linkButton;

    project = projectStore.getProject(projectParam);


    if (project.linkURL) {
      linkButton = (
        <div class="button__project float">
          <a class="button-project__try"href={project.linkURL}>Se projektet!</a>

        </div>
      );
    } else {
      linkButton = false;
    }

    if (project.frameURL) {
      projectFrame = (
        <div class="project-showcase" style={{'height': project.frameHeight+'px'}}>
          <iframe
            class="inside"
            scrolling="no"
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

    if (project.tech) {
      techList = project.tech.map((tech, i) => {
        return <li key={i}>{tech}</li>;
      });
    }


    let copy = '';
    if (project.hasOwnProperty('html')) {
      copy = project.html();
    }

    pageContent = (
      <div id="article">
        <div class="article-head">

          <div class="float">
            <div class="w-50">
              <div class="aspect-outer pt100">
                <div class="aspect-inner project-preview-circle" style={{'overflow':'hidden'}}>
                  <div class="project-image-small" style={{backgroundImage: 'url('+project.thumbBigURL+')'}}/>/>
                </div>

              </div>
              {linkButton}

            </div>
            <div class="w-10"></div>

            <h2>
              {project.name} -<br/>
              {project.title}
            </h2>

            <ul class="sider left">
              <h3>Tech:</h3>
              {techList}
            </ul>
          </div>
          
          {project.sourceCodeURL.length > 2 &&
            <a class="button-project__code" href={project.sourceCodeURL}>Kod</a>
          }

        </div>
        
        <div class="article-body">

          {copy}

        </div>
        {projectFrame}

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