import React from "react";

const getYearFromDate = (dateString) => {
  const date = new Date(dateString);
  return date.getFullYear();
};

const MovieCard = ({final}) => {
  return(
    <div>
        <img 
        src={`https://image.tmdb.org/t/p/original/${final.backdrop_path}`}
        height="100px" width="70px"
        />
        <div>
          <div>USA {getYearFromDate(final.release_date)}</div>
          <h1>{final.title}</h1>
        </div>
   </div>
  );
}

export default MovieCard;