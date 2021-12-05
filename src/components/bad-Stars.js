import React from "react";

const Stars = (props) => {
  const rating = props.rating;

  setRating: function(e) {
    this.setState({currentRating: e.target.value});
  }

  return (
    <>
      <div id="stars">
        <h5>Rating: {rating}</h5>
        <input
          type="text"
          onChange={this.setRating}
          value={this.state.rating}
        />
      </div>
    </>
  );
};

export default Stars;
