import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from "../components/Header"
import Footer from "../components/Footer"

export default class Layout extends React.Component {

  render() {
    const { location, params } = this.props;
    const key = location.pathname.split('/')[1] || 'root'

    return (
      <div>
        <Header location={location} params={params} />
        <div class="view fade run2">

          <ReactCSSTransitionGroup
            component="div"
            className="view-transition"
            transitionName="view-transition"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={300}>
            {React.cloneElement(this.props.children || <div/>, { key, location })}
          </ReactCSSTransitionGroup>

        </div>
        <Footer location={location}/>
      </div>
    );
  }
}