import React from "react";
import { Link } from "react-router";

import navigation from "../data/navigation"
import socialLinks from "../data/sociallinks"

export default class Footer extends React.Component {

  render() {

    const navigationElements = navigation.map( (obj, index) => (
      <Link class="underline block spacer-bottom-small"
            to={obj.path}
            key={index}>
        {obj.name}
      </Link>
    ))

    const socialLinkElements = socialLinks.map( (obj, index) => (
      <a class="underline block spacer-bottom-small"
         href={obj.path}
         key={index}>
        {obj.name}
      </a>
    ))

    return (
      <footer class="divider spacer-bottom-big">
        <div class="float">
          <Link class="w-20"
                to="home">
            <h1 class="punctum punctum-responsive">JH</h1>
          </Link>
          <div class="w-40">
            <p class="muted">+46 (0)73 544 15 01</p>
            <a class="underline">jonathanhagglund@live.com</a>
          </div>
          <div class="w-20">

            {navigationElements}

          </div>
          <div class="w-20">

            {socialLinkElements}

          </div>
        </div>
      </footer>
    );
  }

}