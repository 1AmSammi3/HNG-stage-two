import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Style from './Body.css';
import Card from './Card';

const Body = ({link}) => {
 
  return (
  <div>
    <Navbar />
    <Hero />
    <div>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>
  );
}

export default Body;