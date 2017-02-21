import React from "react";
import { Link } from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import projectStore from "../data/projectStore"

export default class Projects extends React.Component {
  render() {
    const { location, params } = this.props;
    const key = location.pathname;
    const { projectParam } = params;

    let pageContent;

    let categoryProjects = {'application': [], 'website': [], 'fun': []};
    let categoryProjectsDOM = {'application': [], 'website': [], 'fun': []};
    let categoryPairProjectsDOM = {'application': [], 'website': [], 'fun': []};
    let projects = projectStore.getProjects();
    for (var project of projects) {
      categoryProjects[project.type].push(project);
    }
    
    for (var category in categoryProjects) {

      categoryProjectsDOM[category] = categoryProjects[category].map((obj, i) => (
        <div 
          class={projectParam == obj.slug ? 'w-50 min-100 spacer-bottom-small active' : 'w-50 min-100 spacer-bottom-small'}
          key={i}>
          <Link to={'/projects/'+obj.slug}
                class={projectParam ? 'sidebar-project-hold-left' : ''}>
            <div class={projectParam ? 'aspect-outer pt100 spacer-bottom-mini' : 'aspect-outer pt130 spacer-bottom-mini'}>
              <div class="aspect-inner">
                <div class="project-image" 
                   style={{
                     backgroundImage: 'url('+obj.thumbBigURL+')'
                   }}/>
              </div>
            </div>
          </Link>
          <Link to={'/projects/'+obj.slug} 
                class={projectParam ? 'sidebar-project-pop-right' : 'project-description'}>
            <h3>
                {obj.name}
            </h3>
            {obj.title}
          </Link>
        </div>
      ));

      for (var i = 0; i < categoryProjectsDOM[category].length; i+=2) {
        var pair = [];
        if (i%2 == 0) {
          categoryPairProjectsDOM[category][i] = (
            <div class="double" key={category+i}>
              {categoryProjectsDOM[category][i]}
              {categoryProjectsDOM[category][i+1]}
            </div>
          )

        }
      }
    }

    pageContent = (
      <section>

        <div>
{/*          <h2 class={projectParam ? 'hide' : 'intro'}>
            Något om projekt
          </h2>*/}
          <div class={projectParam ? '' : 'hide'}>
            <h1>
              Andra projekt
            </h1>
            <div class="" />
          </div>
        </div>

        <section >
          <h2 class="projects-section muted float">Applikationer</h2>
          <div class="float">
            {categoryPairProjectsDOM['application']}
            <div class="w-10"></div>
          </div>
          <h2 class="projects-section muted float">Webbplatser</h2>
          <div class="float">
            {categoryPairProjectsDOM['website']}
            <div class="w-10"></div>
          </div>

          <h2 class="projects-section muted float">Småkul</h2>
          <div class="float">
            {categoryPairProjectsDOM['fun']}
            <div class="w-10"></div>
          </div>

        </section>

      </section>
    );

    return ( //style={{overflow:'hidden'}}
      <div class="float projects-wrapper"> 

        <div class={projectParam ? 'view-project' : 'view-project hide'}>
          <ReactCSSTransitionGroup
            component="div"
            className="view-project-transition"
            transitionName="view-project-transition"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={300}>
            {React.cloneElement(this.props.children || <div/>, { key })}
          </ReactCSSTransitionGroup>
        </div>

        <div class={projectParam ? 'projects-sidebar' : ''}>
          {pageContent}
        </div>

      </div>
    );

  }
}

