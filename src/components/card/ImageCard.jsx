import React from "react";

const ImageCard = props => {
  if (!props.title && !props.url) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.url} alt="Random NASA" />
      <p>{props.explanation}</p>
    </div>
  );
};

export default ImageCard;
