import React from "react";
import Style from "./Card.css";

const Card = ({img}) => {
  return(
    <div className="cardAll">
      <img src={`./public/Assets/${img}`}/>
    </div>
  );
}

export default Card;