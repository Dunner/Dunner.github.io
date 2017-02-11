"use strict";

import React from 'react';

const projects = {

  getProject : function(name) {
    return this.projects[name];
  },

  getProjects : function(amount) {
    let projectsToSend = [];
    if(amount) {
      let i = 0;
      for(let project in this.projects) {
        projectsToSend.push(this.projects[project])
        i++;
        if (i >= amount) {return projectsToSend; break;}
      }
    }
    for(let project in this.projects) {
      projectsToSend.push(this.projects[project])
    }
    return projectsToSend;
  },

  projects: {

    creeplab: { 
      type: 'bigserious',
      title: 'CreepLab - an AI machine learning experiment with neural networks',
      slug: 'creeplab',
      name: 'CreepLab',
      path: '/projects/creeplab/',
      backgroundURL: '',
      thumbURL: '/projects/creeplab/img/creeplab-thumb.png',
      thumbBigURL: '/projects/creeplab/img/creeplab-thumbbig.gif',
      thumbColor: '#161616',
      shortDescription: 'Information om projektet',
      linkURL: 'http://35.156.18.28:9003',
      html: function() { return(
        <div>
          <p>n stuff</p>
        </div>
      )}
    },

    pfeed: {
      type: 'bigserious',
      title: 'Personal Feed, A boilerplate for MEAN-stack applications',
      slug: 'pfeed',
      name: 'pFeed',
      path: '/projects/pfeed/',
      backgroundURL: '',
      thumbURL: '/projects/pfeed/img/pfeed-thumb.png',
      thumbBigURL: '/projects/pfeed/img/pfeed-thumbbig.png',
      thumbColor: '#cecece',
      shortDescription: 'Information om projektet',
      linkURL: 'http://35.156.18.28:8080',
      html: function() { return(
        <div>
          <p>
pFeed(Personal Feed) A two state application, one state displaying feeds and allowing the creation of a new feed, and one state showing a specific feed with the alternative to unlock the feed with a password and editing it, creating & deleting posts. Unlocking a feed is remebered using backend sessions, allowing the user to come back to his feed whenever without having to re-unlock it. Each feed is also given a unique slug, allowing feed URL’s like pfeed.com/tonys-feed (Tony’s feed)
A simple but well made fullstack single-page appliction, showcasing password protection, text-editing, states & sessions.
Tech: Angular, Grunt, Node, Express, MongoDB(Mongoose), Stylus.
          </p>
        </div>
      )}
    },

    spetsad: {
      type: 'bigserious',
      title: 'Spetsad.io - HTML5 MOBA-game',
      slug: 'spetsad',
      name: 'Spetsad',
      path: '/projects/spetsad/',
      backgroundURL: '',
      thumbColor: '#191919',
      thumbURL: '/projects/spetsad/img/spetsad-thumb.png',
      thumbBigURL: '/projects/spetsad/img/spetsad-thumbbig.png',
      shortDescription: 'Information om projektet',
      linkURL: 'http://35.156.18.28',
      html: function() { return(
        <div>
          <p>
An ongoing side-project, Spetsad is a HTML5 MOBA with a unique twist focusing on resource collection and teamwork. Spetsad’s ambition is to close the gap between smartphone-, tablet- & PC-gaming enabling the game to be played in any life situation.
Spetsad is also an experiment in monetization & marketing, testing the effectiveness of adverts, in-game purchases & marketing strategies.
Tech: Socket.io, Node, Phaser, Stylus, Snap.svg, Photoshop.
          </p>
        </div>
      )}
    },

    dajon: { 
      type: 'bigserious',
      title: 'Dajon - Cutting edge website creation tool',
      slug: 'dajon',
      name: 'Dajon',
      path: '/projects/dajon/',
      backgroundURL: '',
      thumbColor: '#191919',
      thumbURL: '/projects/dajon/img/dajon-thumb.png',
      thumbBigURL: '/projects/dajon/img/dajon-thumbbig.png',
      shortDescription: 'Information om projektet',
      html: function() { return(
        <div>
          <p>
    <img src="/projects/dajon/img/longGifDajon.gif" class="center" width="800px"/>

A serious startup-attempt. Dajon is the dream of an entire eco-system where content creators and business owners come together in synergy allowing creators to work with their areas of expertise and passion, and businesses to employ and receive what they need without complications. Dajon’s major feature is a cutting-edge web-page editor thats intuitively easy to use and yet more customizable than that of any other competitor.
Collaboration with David Meyer(Backend), putting extra focus on planning, versioning, work- & build processes.
Tech: Angular, Grunt, Bower, Node, Express, MongoDB(Mongoose), Font Awesome, Stylus, Bower, Multer, Passport
          </p>
        </div>
      )}
    },

    portfolio: { 
      type: 'bigserious',
      title: 'Jonathanhagglund.se - My very own portfolio',
      slug: 'portfolio',
      name: 'Portfolio',
      path: '/projects/portfolio/',
      backgroundURL: '',
      thumbURL: '/projects/portfolio/img/jh-thumb.png',
      thumbBigURL: '/projects/portfolio/img/jh-thumbbig.png',
      thumbColor: '#191919',
      thumbColorHover: '#cecece',
      shortDescription: 'Information om projektet',
      html: function() { return(
<div>
  <p>
    React learning & workflow(Build & pre-processors) experiment project.
    One of many iterations of my personal portfolio and website, 
  </p>

  <p>
    <img src="/projects/fossviking/img/fossviking-thumb.png" class="left" width="200px"/>
    React learning & workflow(Build & pre-processors) experiment project.
    One of many iterations of my personal portfolio and website, 
    this iteration focuses on extreme simplicity, high quality and optimization. 
    Staying away from cool ideas and potential time-waste, 
    instead focusing on building from a user perspective.
  </p>

  <p>
    Tech: React, Stylus, Webpack, Babel.
  </p>

  <br />
  <h2 class="divider"> And .. </h2>
  <br />

  <p>
    React learning & workflow(Build & pre-processors) experiment project.
    One of many iterations of my personal portfolio and website, 
    <img src="/projects/fossviking/img/fossviking-thumb.png" class="right" width="200px"/>
    this iteration focuses on extreme simplicity, high quality and optimization. 
    Staying away from cool ideas and potential time-waste, 
    instead focusing on building from a user perspective.
  </p>

</div>
      )}
    },

    fossviking: { 
      type: 'freelance',
      title: 'Fossviking website',
      slug: 'fossviking',
      name: 'Fossviking.com',
      path: '/projects/fossviking/',
      backgroundURL: '',
      thumbURL: '/projects/fossviking/img/fossviking-thumb.png',
      thumbBigURL: '/projects/fossviking/img/fossviking-thumbbig.png',
      shortDescription: 'Information om projektet',
      linkURL: 'http://fossviking.com/',
      html: function() { return(
        <div>
          <p>
Developing a new website for the client to comply with modern standards and expectations to compete with the modern competition. Developing tools to help the client cut costs and time. Included a long planning phase to find the clients need, presenting proposals to address these and then creating the actual solutions.
Moved from an old CMS to WordPress, creating a custom theme, and a bunch of custom addons for multi-language, page editing, product editing, image-sliders, and CRM-solutions. 
          </p>
        </div>
      )}
    },

    avatarmaker: { 
      type: 'fun',
      title: 'Avatar Maker',
      slug: 'avatarmaker',
      name: 'Avatar Maker',
      path: '/projects/avatarmaker/',
      backgroundURL: '',
      thumbURL: '/projects/avatarmaker/img/avatarmaker-thumb.png',
      thumbBigURL: '/projects/avatarmaker/img/avatarmaker-thumbbig.png',
      shortDescription: 'Information om projektet',
      frameURL: '//codepen.io/Dunner/embed/Nbjbqe/?height=800&theme-id=light&default-tab=result&embed-version=2',
      html: function() { return(
        <div>
          <p>n stuff</p>
        </div>
      )}
    },

    wpc: { 
      type: 'freelance',
      title: 'WPCTerrasse.no',
      slug: 'wpc',
      name: 'WPCTerrasse.no',
      path: '/projects/wpc/',
      backgroundURL: '',
      thumbURL: '/projects/wpc/img/wpc-thumb.png',
      thumbBigURL: '/projects/wpc/img/wpc-thumbbig.png',
      shortDescription: 'Information om projektet',
      linkURL: 'http://wpcterrasse.no/',
      html: function() { return(
        <div>
          <p>
A pure marketing effort with the aim to sell of a storage/supply of WPC-decking over the summer. With a long term goal of establishing a place on the on the market for future supplies. Involved developing a well structured informative website, finding a buying the best domains, linking the website to a facebook-group, analyzing the buyers needs and creating an effective advertising campaign through facebook and using this to boost search-engine ratings..
          </p>
        </div>
      )}
    },


    cpicker: { 
      type: 'fun',
      title: 'Color Picker',
      slug: 'cpicker',
      name: 'ColorPicker',
      path: '/projects/cpicker/',
      backgroundURL: '',
      thumbURL: '/projects/cpicker/img/cpicker-thumb.png',
      thumbBigURL: '/projects/cpicker/img/cpicker-thumbbig.png',
      shortDescription: 'Information om projektet',
      frameURL: '//codepen.io/Dunner/embed/jWdEJv/?height=800&theme-id=light&default-tab=result&embed-version=2',
      html: function() { return(
        <div>
          <p>n stuff</p>
        </div>
      )}
    },

    storytime: {
      type: 'fun',
      title: 'Story Time',
      slug: 'storytime',
      name: 'Story Time',
      path: '/projects/storytime/',
      backgroundURL: '',
      thumbURL: '/projects/storytime/img/storytime-thumb.png',
      thumbBigURL: '/projects/storytime/img/storytime-thumbbig.png',
      shortDescription: 'Information om projektet',
      linkURL: '/projects/storytime/frame/index.html',
      html: function() { return(
        <div>
          <p>
Over-ambitious school project, Storytime is the evolution from an old simple hardcoded game to fullstack-solution enabling anyone to create their own stories, characters and backdrops. All stories gathered in one place and editable through password protection with sessions.
Tech: Grunt, Angular, Snap.svg, Node, Express, MongoDB(Mongoose)
          </p>
        </div>
      )}
    },

    stepform: {
      type: 'fun',
      Title: 'Step by step form',
      slug: 'stepform',
      name: 'Step by step form',
      path: '/projects/stepform/',
      backgroundURL: '',
      thumbURL: '/projects/stepform/img/stepform-thumb.png',
      thumbBigURL: '/projects/stepform/img/stepform-thumbbig.png',
      shortDescription: 'Information om projektet',
      frameURL: '//codepen.io/Dunner/embed/JGBJgE/?height=800&theme-id=light&default-tab=result&embed-version=2',
      html: function() { return(
        <div>
          <p>n stuff</p>
          <a href="http://freefrontend.com/css-forms/?ref=webdesignernews.com#interactive-forms">Featured On: freefrontend.com</a>
        </div>
      )}
    }

  }
};

module.exports = projects;


// location.pathname.match(/^\/projects/)
