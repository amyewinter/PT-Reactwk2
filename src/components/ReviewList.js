import React from "react";

const ReviewList = (props) => {
  const reviews = props.reviews;
  const reviewlist = reviews.map((review) => <li>{review}</li>);

  return (
    <>
      <div id="review-list">
        <h5>Reviews</h5>
        <ul>{reviewlist}</ul>
      </div>
    </>
  );
};

export default ReviewList;
