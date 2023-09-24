import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Style from './Body.css';
import Card from './Card';
import ImageData from './imagesData';

const Body = ({link}) => {
 
 const images = imagesData.map(image => {return <Card img={image.img} />});
 
  return (
  <div className="all">
    <Navbar />
    <Hero />
    <div className="cardView">
      {images}
    </div>
  </div>
  );
}

export default Body;