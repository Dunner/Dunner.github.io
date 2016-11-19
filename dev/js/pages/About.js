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
          Erfarenhet med
        </section>

        <section class="float divider spacer-bottom-big">
          <h2 class="w-20 muted">Leker med</h2>
          <div class="w-80 float">
            {elSkills['testing']}
          </div>
        </section>

        <section class="float divider spacer-bottom-big">

          <h2 class="w-100 muted spacer-bottom-big">Utveckling</h2>

          <h3 class="w-20 muted">Frontend</h3>
          <div class="w-30 spacer-bottom-small">
            {elSkills['devFrontend']}
          </div>

          <h3 class="w-20 muted">Backend</h3>
          <div class="w-30 spacer-bottom-small">
            {elSkills['devBackend']}
          </div>

          <h3 class="w-20 muted">Mönster</h3>
          <div class="w-30 spacer-bottom-small">
            {elSkills['devPatterns']}
          </div>

          <h3 class="w-20 muted">Tekniker</h3>
          <div class="w-30">
            {elSkills['devTechniques']}
          </div>

          <h3 class="w-20 muted">Tjänster</h3>
          <div class="w-30 spacer-bottom-small">
            {elSkills['devServices']}
          </div>

        </section>

        <section class="float divider spacer-bottom-big">

          <h2 class="w-100 muted spacer-bottom-big">Design</h2>
          
          <h3 class="w-20 muted">Verktyg</h3>
          <div class="w-30 spacer-bottom-small">
            {elSkills['designTools']}
          </div>

          <h3 class="w-20 muted">Tekniker</h3>
          <div class="w-30 spacer-bottom-small">
            {elSkills['designTechniques']}
          </div>

        </section>

      </div>
    );
  }
}