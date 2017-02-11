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
            return <div class="muted">{obj}</div>}

          //make sure words separated by a / break like words(wrap in span inline-block's)
          var words = obj.split('/');
          if (words.length > 1){ 
            obj = words
              .map(function(word, index){
                if (index != words.length-1) {word+='/'}
                return <span class="inline-block">{word}</span>;
              });
          }

          return <div>{obj}</div>;
        });
      // .map( (obj,index) => (<div key={index}>{obj}</div>))
    }
    return (
      <div>



        <section class="intro">
          Om mig
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