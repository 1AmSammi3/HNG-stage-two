import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Style from './Body.css';
import Card from './Card';
import ImageData from './imagesData';

const Body = ({link}) => {
 
  return (
  <div className="all">
    <Navbar />
    <Hero />
    <div className="cardView">
      <Card img="manager.jpg"/>
      <Card img="CEO.png"/>
      <Card img="Founder.jpg"/>
      <Card img="Director.jpg"/>
    </div>
  </div>
  );
}

export default Body;