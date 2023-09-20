import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Style from './Body.css';

const Body = ({link}) => {
 
  return (
  <div>
    <Navbar />
    <Hero />
    <About />
  </div>
  );
}

export default Body;