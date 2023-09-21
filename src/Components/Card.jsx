import React from "react";
import Style from "./Card.css";

const Card = (props) => {
  return(
    <div>
      <img src={props.img}/>
    </div>
  );
}

export default Card;