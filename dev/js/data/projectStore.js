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




    dajon: { 
      type: 'bigserious',
      title: 'Dajon - Cutting edge website creation tool',
      slug: 'dajon',
      name: 'Dajon',
      path: '/projects/dajon/',
      backgroundURL: '',
      thumbColor: '#cecece',
      thumbURL: '/projects/dajon/img/dajon-thumb.png',
      thumbBigURL: '/projects/dajon/img/dajon-thumbbig.png',
      shortDescription: 'Information om projektet',
      tech: ['Node','Express','MongoDB','Angular','Grunt','Bower','Stylus'],
      html: function() { return(
<div>

  <p class="float">

    <span class="small-caps">Dajon är en internetbaserad tjänst</span> där alla resurser som krävs
    för att skapa och underhålla en professionell webbplats är lättillgängliga och enkla att använda.
    Oavsett kompetens inom området ska det inte finnas några hinder för att billigt,
    snabbt och effektivt kunna skapa just den webbplats du drömmer om.
    Oavsett om du bara kräver verktygen eller ett enkelt system för att låna kompetensen av någon som har den.
  </p>

  
  <p class="small block float">
    Dajon utvecklades 2014-2016 och var ett sammarbete med David Meyer.
  </p>



  {/*   
    <img src="/projects/dajon/img/longGifDajon.gif" class="center" width="85%"/>
    A serious startup-attempt. Dajon is the dream of an entire eco-system where content creators and business owners come together in synergy allowing creators to work with their areas of expertise and passion, and businesses to employ and receive what they need without complications. Dajon’s major feature is a cutting-edge web-page editor thats intuitively easy to use and yet more customizable than that of any other competitor.
    Collaboration with David Meyer(Backend), putting extra focus on planning, versioning, work- & build processes.
    Tech: Angular, Grunt, Bower, Node, Express, MongoDB(Mongoose), Font Awesome, Stylus, Bower, Multer, Passport
  */}


  <p>

    Tjänsten erbjuder enkla verktyg för att köpa, sälja, skapa och redigera grafiskt sidinnehåll såsom:
    <ul>
      <li>Fotografier</li>
      <li>Typsnitt</li>
      <li>Färdiga designmallar</li>
      <li>Översättningar</li>
      <li>Artiklar</li>
    </ul>
    samt näst intill obegränsat med användarskapad funktionalitet såsom bildkaruseller och konkaktformulär.
  </p>

  <p>

    Men viktigaste av allt,
    marknadens mest flexibla verktyg för webbplatsutformning som tillåter dig som kund att forma
    precis den webbplats eller applikation du behöver utifrån de grafiska element som är nämnda ovan.
    Tillsammans med de integrerade verktyg för datahantering vi erbjuder är det pinsamt enkelt att
    forma din hemsida efter inte enbart grafiska men även praktiska behov.
    Är det en blogg eller butik du behöver? - Enbart fantasin sätter gränser.
  </p>

  <img src="/projects/dajon/img/longGifDajon.gif" class="center" width="85%"/>

  <p>

    Bland de skickliga innehållsskapare som arbetar i våran tjänst finns 
    även de som via ett smidigt system kan anlitas för att ordna det där lilla extra
    som din webbplats behöver för att bli snäppet bättre än alla andras.
    Det finns till och med de som är villiga att skriva eller översätta den text du behöver,
    nästan oavsett språk!
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
      tech: ['React', 'Stylus', 'Webpack', 'Babel'],
      html: function() { return(

<div>
  <p>
    React learning & workflow(Build & pre-processors) experiment project.
    One of many iterations of my personal portfolio and website, 
  </p>


  <p>
    React learning & workflow(Build & pre-processors) experiment project.
    One of many iterations of my personal portfolio and website, 
    this iteration focuses on extreme simplicity, high quality and optimization. 
    Staying away from cool ideas and potential time-waste, 
    instead focusing on building from a user perspective.
  </p>


  <section class="divider">

    <img src="/projects/fossviking/img/fossviking-thumb.png" class="left" width="200px"/>
    <p>
      <h2> And .. </h2>
      React learning & workflow(Build & pre-processors) experiment project.
      One of many iterations of my personal portfolio and website, 
      this iteration focuses on extreme simplicity, high quality and optimization. 
      Staying away from cool ideas and potential time-waste, 
      instead focusing on building from a user perspective.
    </p>

  </section>



</div>

      )}
    },



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
      tech: ['Phaser','Gulp','Stylus'],

      html: function() { return(

<div>

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
      tech: ['Node','Express','MongoDB','Angular','Grunt','Bower','Stylus'],
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
      tech: ['Node','Express','Socket.io', 'Phaser'],
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





/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/


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
      tech: ['PHP', 'Wordpress'],
      html: function() { return(

<div>

  <p>
    Developing a new website for the client to comply with modern standards and expectations to compete with the modern competition. Developing tools to help the client cut costs and time. Included a long planning phase to find the clients need, presenting proposals to address these and then creating the actual solutions.
    Moved from an old CMS to WordPress, creating a custom theme, and a bunch of custom addons for multi-language, page editing, product editing, image-sliders, and CRM-solutions. 
  </p>

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
      tech: ['Angular'],
      html: function() { return(

<div>

  <p>
    A pure marketing effort with the aim to sell of a storage/supply of WPC-decking over the summer. With a long term goal of establishing a place on the on the market for future supplies. Involved developing a well structured informative website, finding a buying the best domains, linking the website to a facebook-group, analyzing the buyers needs and creating an effective advertising campaign through facebook and using this to boost search-engine ratings..
  </p>

</div>

      )}
    },




/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/





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
      tech: ['Angular', 'Snap.svg', 'Canvas', 'Stylus'],
      html: function() { return(

<div>

  <p>n stuff</p>

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
      tech: ['Angular', 'jQuery'],
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
      tech: ['Node','Express','MongoDB','Angular','Grunt','Bower','Stylus'],
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
      tech: ['Angular'],
      html: function() { return(

<div>

  <a href="http://freefrontend.com/css-forms/?ref=webdesignernews.com#interactive-forms">Featured On: freefrontend.com</a>

</div>

      )}
    }

  }
};

module.exports = projects;


// location.pathname.match(/^\/projects/)
