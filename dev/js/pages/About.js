import React from "react";

import skills from "../data/skills"

export default class About extends React.Component {

  render() {
    const elSkills = {};
    const skillAreas = [
      'testing',
      'devFrontend', 
      'devBackend',
      'devPatterns',
      'devTechniques',
      'devServices',
      'designTools',
      'designTechniques',
    ];

    for (var skillArea of skillAreas) {
      elSkills[skillArea] = skills[skillArea]
        .map( (obj,index) => { 

          //Add muteclass to skills with -- before them
          if (obj.substr(0,2)== '--') {
            obj = obj.replace('--','');
            return <div class="muted" key={skillArea+obj}>{obj}</div>}

          //make sure words separated by a / break like words(wrap in span inline-block's)
          var words = obj.split('/');
          if (words.length > 1){ 
            obj = words
              .map(function(word, index){
                if (index != words.length-1) {word+='/'}
                return <span key={skillArea+word} class="inline-block">{word}</span>;
              });
          }
          return <div key={skillArea+index}>{obj}</div>;
        });

      // .map( (obj,index) => (<div key={index}>{obj}</div>))
    }

    return (
      <div>



        <section class="intro">

          <h2 class="muted spacer-bottom-big">Vem är jag?</h2>

          <div class="about-text">
            <p>
              Jag är en kreativ webbutvecklare från Stockholm. 
              Jag älskar att spåna på koncept,
              ta fram prototyper och skapa riktigt bra produkter som sätter användaren i fokus.
              Få saker gör mig så glad som att se mina skapelser användas utan problem och frustration.
              När användaren kan göra det den vill ostört har jag gjort ett bra jobb.
            </p>

            <p>
              Jag älskar tävling, 
              njuter av löpning och sportande och är en riktig friluftsentusiast och flugfiskare.
            </p>
          </div>
          
        </section>


        <section class="float divider spacer-bottom-big">

          <h2 class="w-100 muted spacer-bottom-big">Utveckling</h2>

          <h3 class="w-20 muted step-in">Frontend</h3>
          <div class="w-30 spacer-bottom-small step-in-twice">
            {elSkills['devFrontend']}
          </div>

          <h3 class="w-20 muted step-in">Backend</h3>
          <div class="w-30 spacer-bottom-small step-in-twice">
            {elSkills['devBackend']}
          </div>

          <h3 class="w-20 muted step-in">Mönster</h3>
          <div class="w-30 spacer-bottom-small step-in-twice">
            {elSkills['devPatterns']}
          </div>

          <h3 class="w-20 muted step-in">Tekniker</h3>
          <div class="w-30 step-in-twice">
            {elSkills['devTechniques']}
          </div>

          <h3 class="w-20 muted step-in">Tjänster</h3>
          <div class="w-30 spacer-bottom-small step-in-twice">
            {elSkills['devServices']}
          </div>

        </section>

        <section class="float divider spacer-bottom-big">

          <h2 class="w-100 muted spacer-bottom-big">Design</h2>
          
          <h3 class="w-20 muted step-in">Verktyg</h3>
          <div class="w-30 spacer-bottom-small step-in-twice">
            {elSkills['designTools']}
          </div>

          <h3 class="w-20 muted step-in">Tekniker</h3>
          <div class="w-30 spacer-bottom-small step-in-twice">
            {elSkills['designTechniques']}
          </div>

        </section>

        <section class="float divider spacer-bottom-big">
          <h2 class="w-20 muted">Lär mig</h2>
          <div class="w-80 float step-in">
            {elSkills['testing']}
          </div>
        </section>

      </div>
    );
  }
}