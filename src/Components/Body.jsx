import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Style from './Body.css';
import Card from './Card';
import ImageData from './imagesData';

const Body = () => {
 
 const images = imagesData.map(data => {
   return <Card 
   img={data.img}
   post={data.post}
   contact={data.contact} 
   />
   
 }
   );
 
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