import React, { Component } from 'react';
import { RouteTransition, presets } from 'react-router-transition';

const TransitionLayout = (props) => {
  const preset = props.location.action === 'POP'
    ? presets.slideRight
    : presets.slideLeft;

    console.log(props.location.action);

  return(
    <div>
      <div className="navbar">
      <div className="navbar-inner">
          <div className="left">Left</div>
          <div className="center">Center</div>
          <div className="right">Right</div>
          </div>
      </div>

      <div className="panel-overlay"></div>
      <p><span className="open-panel">Open Left Panel</span></p>

      <div className="panel panel-left panel-reveal">
        <div className="content-block">
           <p>Left Panel content here</p>
          <p><span className="close-panel">Close me</span></p>
       </div>
      </div>

      <RouteTransition
        pathname={props.location.pathname}
        {...preset}
      >
        {props.children}
      </RouteTransition>
    </div>
  );
}

export default TransitionLayout;
