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

    let projectsContent = projectStore.map((obj, i) => (
      <div 
        class={projectParam == obj.slug ? 'hide w-50 spacer-bottom-big' : 'w-50 spacer-bottom-big'}
        key={i}>
        <Link to={'/projects/'+obj.slug}>
          <div class="project-image spacer-bottom-medium" 
              style={{
                backgroundImage: 'url('+obj.thumbURL+')'
              }}/>
        </Link>
        <h3 class="spacer-bottom-small">
          <Link to={'/projects/'+obj.slug} class="underline">
            {obj.name}
          </Link>
        </h3>
        {obj.shortDescription}
      </div>
    ));

    pageContent = (
      <div>

        <div>
          <h2 class={projectParam ? 'hide intro' : 'intro'}>
            Något om projekt
          </h2>
          <div class={projectParam ? '' : 'hide'}>
            <h2 class="muted spacer-bottom-small">
              Andra projekt
            </h2>
            <div class="divider" />
          </div>
        </div>

        <section >
          <h2 class={projectParam ? 'hide' : 'w-20 muted'}>Projekt</h2>
          <div class="w-80 float">

            {projectsContent}

          </div>
        </section>
      </div>
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
            {React.cloneElement(this.props.children || <div/>, { key, location })}
          </ReactCSSTransitionGroup>
        </div>
        <div class={projectParam ? 'projects-sidebar' : ''}>
          {pageContent}
        </div>
      </div>
    );

  }
}