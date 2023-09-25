import React from "react";
import Style from "./Card.css";

const Card = (props) => {
  return(
    <div className="cardAll">
      <img src={`./public/Assets/${props.img}`}/>
      <h1>{props.post}</h1>
      <h2>{props.contact}</h2>
    </div>
  );
}

export default Card;