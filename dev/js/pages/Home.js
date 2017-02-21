import React from "react";
import { Link } from "react-router";

import projectStore from "../data/projectStore"

export default class Home extends React.Component {

  render() {

    let lastPair = projectStore.getProjectsInTwos(4,1);
    lastPair.push({
      title: 'Se fler projekt',
      slug: '',
      name: 'Mer',
      path: '/projects',
      thumbColor: 'transparent',
      thumbURL: '/img/more.png'
    });
    let projectPairs = [
      projectStore.getProjectsInTwos(0,2),
      projectStore.getProjectsInTwos(2,2),
      lastPair
    ];
    let projectPairsDOM = [];
    projectPairs.map((pair, i) => {
      let singles = [];
      for (let single of pair) {
        singles.push(
          <div 
            class="spacer-bottom-big project-single"
            style={{
              'width': '50%',
              'float': 'left' }}
            key={single.slug}>
            <a href={'#'+single.path} class="project-preview" title={single.title}>
              <div class="aspect-outer pt100">
                <div class="aspect-inner project-preview-circle"
                     style={{
                      backgroundColor: single.thumbColor
                     }}/>
              </div>
              <div class="project-image-small spacer-bottom-medium" 
                   style={{
                     backgroundImage: 'url('+single.thumbURL+')'
                    }}/>
              <div class="project-preview-text">
                {single.name}
              </div>
            </a>
          </div>
        )
      }
      projectPairsDOM.push(
        <div key={i} class="third">
          {singles}
        </div>
      );
    });


    return (
      <div>
        <section class="intro">
          Välkommen,<br />
          jag är en kreativ webbutvecklare med en <br />
          passion för användarvänlighet. <br />
          <br />
          Här har jag samlat information <a href="#/about" class="underline" to="about">om mig</a>,<br />
          samt ett urval av mina <a href="#/projects" class="underline" to="projects">projekt</a>.<br />

        </section>

        <section class="float divider">
          <h2 class="w-15 muted">Projekt</h2>
          <div class="w-85 float">
            {projectPairsDOM}
          </div>

        </section>

      </div>
    );
  }
}

/*
let twoProjects = projectStore.getProjects(2).map((obj, i) => (
  <div class="w-50 spacer-bottom-big" key={i}>
    <Link to={'projects/'+obj.slug}>
      <div class="project-image spacer-bottom-medium" 
          style={{
            backgroundImage: 'url('+obj.thumbURL+')'
          }}/>
    </Link>

    <h3 class="spacer-bottom-small">
      <Link to={'projects/'+obj.slug} class="underline">
        {obj.name}
      </Link>
    </h3>
    {obj.shortDescription}
    
  </div>
));
*/


/*
<section class="float divider">
  <h2 class="w-20 muted">Jobbar med</h2>
  <div class="w-80 step-in">

    <div class="float spacer-bottom-medium">
      <div class="w-50">SaaS pagebuilder</div>
      <div class="w-25 muted">Startup</div>
      <div class="w-25 muted">Sent 2016</div> 
    </div>

    <div class="float spacer-bottom-medium">
      <div class="w-50">UX & Marknadsföring</div>
      <div class="w-25 muted">Utbildning</div>
      <div class="w-25 muted">Sent 2016</div> 
    </div>

  </div>
</section>
*/