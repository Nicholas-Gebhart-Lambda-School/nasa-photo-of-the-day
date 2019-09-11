import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";

function ImageGrid() {
  const [imageState, setImageState] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        const image = res.data;
        setImageState(image);
      })
      .catch(err => {
        console.log("Houston, we have a problem", err);
      });
  }, []);

  return (
    //

    <div>
      <ImageCard
        title={imageState.title}
        url={imageState.url}
        explanation={imageState.explanation}
      />
    </div>
  );
}

export default ImageGrid;
