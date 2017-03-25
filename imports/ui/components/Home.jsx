import React from 'react';
import { Link } from 'react-router';

const Home = () => (
	<div style={{position: 'absolute'}}>
		Home Page
		<Link to='about'>About</Link>
	</div>
);

export default Home;
