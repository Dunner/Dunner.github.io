import React from "react";
import { Link } from "react-router";

import navigation from "../data/navigation"

export default class Header extends React.Component {

  //activeClassName="underline"

  render() {
    const { location } = this.props;
    const navigationElements = navigation.map( (obj, index) => (
      <Link class={ location.pathname == obj.path ?  'underline' : '' }
            to={obj.path}
            key={index}>
        {obj.name}
      </Link>
    ))

    return (
      <header>

        <h1 class="masthead run">
          <Link to="/" class="logo punctum">
            Jonathan Hägglund
          </Link>
          <Link to="/" class="logo punctum-responsive">
            JH
          </Link>
          <span class="description fade run delayhide">
            En kort introduktion
          </span>
        </h1>

        <nav class="fade run2">
          {navigationElements}
        </nav>

      </header>
    );
  }
  
}