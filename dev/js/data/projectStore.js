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

    fossviking: { 
      slug: 'fossviking',
      name: 'Fossviking.com',
      path: '/projects/fossviking/',
      backgroundURL: '',
      thumbURL: '/projects/fossviking/img/fossviking-thumb.png',
      shortDescription: 'Information om projektet',
      frameURL: 'http://fossviking.com/',
      html: function() { return(
        <div>
          <h1>Wasap</h1>
          <p>n stuff</p>
        </div>
      )}
    },

    avatarmaker: { 
      slug: 'avatarmaker',
      name: 'Avatar Maker',
      path: '/projects/avatarmaker/',
      backgroundURL: '',
      thumbURL: '/projects/avatarmaker/img/avatarmaker-thumb.png',
      shortDescription: 'Information om projektet',
      frameURL: '//codepen.io/Dunner/embed/Nbjbqe/?height=800&theme-id=light&default-tab=result&embed-version=2'
    },

    wpc: { 
      slug: 'wpc',
      name: 'WPCTerrasse.no',
      path: '/projects/wpc/',
      backgroundURL: '',
      thumbURL: '/projects/wpc/img/wpc-thumb.png',
      shortDescription: 'Information om projektet',
      frameURL: 'http://wpcterrasse.no/'
    },


    cpicker: { 
      slug: 'cpicker',
      name: 'ColorPicker',
      path: '/projects/cpicker/',
      backgroundURL: '',
      thumbURL: '/projects/cpicker/img/cpicker-thumb.png',
      shortDescription: 'Information om projektet',
      frameURL: '//codepen.io/Dunner/embed/jWdEJv/?height=800&theme-id=light&default-tab=result&embed-version=2'
    },

    storytime: { 
      slug: 'storytime',
      name: 'Story Time',
      path: '/projects/storytime/',
      backgroundURL: '',
      thumbURL: '/projects/storytime/img/storytime-thumb.png',
      shortDescription: 'Information om projektet',
      frameURL: '/projects/storytime/frame/index.html'
    },

    stepform: { 
      slug: 'stepform',
      name: 'Step by step form',
      path: '/projects/stepform/',
      backgroundURL: '',
      thumbURL: '/projects/stepform/img/stepform-thumb.png',
      shortDescription: 'Information om projektet',
      frameURL: '//codepen.io/Dunner/embed/JGBJgE/?height=800&theme-id=light&default-tab=result&embed-version=2'
    },

    pfeed: { 
      slug: 'pfeed',
      name: 'pFeed',
      path: '/projects/pfeed/',
      backgroundURL: '',
      thumbURL: '/projects/pfeed/img/pfeed-thumb.png',
      shortDescription: 'Information om projektet',
      frameURL: 'http://35.156.18.28:8080'
    },

    spetsad: { 
      slug: 'spetsad',
      name: 'Spetsad',
      path: '/projects/spetsad/',
      backgroundURL: '',
      thumbURL: '/projects/spetsad/img/spetsad-thumb.png',
      shortDescription: 'Information om projektet',
      frameURL: 'http://35.156.18.28'
    },
  }
};

module.exports = projects;


// location.pathname.match(/^\/projects/)
