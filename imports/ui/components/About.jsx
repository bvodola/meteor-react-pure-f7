import React, { Component } from 'react';
import { Link } from 'react-router';

const About = () => (
  <div style={{position: 'absolute'}}>
    About Page
    <Link to='/'>Home</Link>
  </div>
);

export default About;
