import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Style from './Body.css';

const Body = ({link}) => {
 
  return (
  <div>
    <Navbar />
    <Hero />
  </div>
  );
}

export default Body;