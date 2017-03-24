import React from 'react';

const Home = () => (
	<span>
	  <div className="statusbar-overlay"></div>
	  <div className="views">
	    <div className="view view-main">
	      <div className="navbar">
	        <div className="navbar-inner">
	          <div className="center sliding">Awesome App</div>
	        </div>
	      </div>
	      <div className="pages navbar-through toolbar-through">

	        <div data-page="index" className="page">
	          <div className="page-content">
	            <p>Page content goes here</p>
	          </div>
	        </div>

					<div data-page="about" className="page cached">
	          <div className="page-content">
	            <p>About</p>
	          </div>
	        </div>

	      </div>
	      <div className="toolbar">
	        <div className="toolbar-inner">
	          <a href="#about" className="link">About</a>
	          <a href="#about" className="link">About</a>
	        </div>
	      </div>
	    </div>
	  </div>
	</span>
);

export default Home;
