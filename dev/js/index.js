require.context("../", true, /^\.\/.*\.html/);

var reset = require('../styles/reset.css');
var style = require('../styles/style.styl');
var style = require('../styles/responsive.styl');
var style = require('../styles/animations.styl');

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";

import scrollToY from "./scripts/scrollToY"

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Project from "./pages/Project";

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route 
      path="/"
      name="home"
      component={Layout} 
      onChange={(prevState, nextState) => {
        if (nextState.location.action !== "POP") {
          scrollToY(0, 1500, 'easeInOutQuint');
        }
      }
    }>
			<IndexRoute component={Home} />
      <Route path="/about" component={About} name="about"/>
      <Route path="/projects" component={Projects} name="projects">
        <Route path="/projects/:projectParam" component={Project} />
      </Route>
			
		</Route>
	</Router>,
app)

if (module.hot) {
  module.hot.accept();
}