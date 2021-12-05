import React from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import Stars from "./Stars";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="container" key={index}>
          <div className="row">
            <div className="col-md-2 image-container m-4">
              <img src={movie.poster} alt="movie" width="250px"></img>
            </div>
            <div className="col-md-4 justify-content-start m-4">
              <h2>{movie.title}</h2>
              <p>{movie.synopsis}</p>
              <Stars rating={movie.rating} />
              <ReviewList reviews={movie.reviews} />
              <ReviewForm />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
