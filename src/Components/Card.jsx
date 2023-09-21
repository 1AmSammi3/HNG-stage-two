import React from "react";
import Style from "./Card.css";

const Card = (props) => {
  return(
    <div className="CardAll">
      <img src={props.img}/>
    </div>
  );
}

export default Card;