import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Style from './Body.css';
import Card from './Card';

const Body = ({link}) => {
 
  return (
  <div className="all">
    <Navbar />
    <Hero />
    <div className="cardView">
      <Card img="./src/Components/Assets/manager.jpg"/>
      <Card img="./src/Components/Assets/CEO.png"/>
      <Card img="./src/Components/Assets/Founder.jpg"/>
      <Card img="./src/Components/Assets/Director.jpg"/>
    </div>
  </div>
  );
}

export default Body;