import React, { useEffect, useState } from "react";
import axios from "axios";
// import CarouselCard from "./CarouselCard";

function CarouselGrid() {
  const token = "1fEgVleJ77KI0sefAJYab9JMhn8Zw1dVKu2pKTdk";
  const [imagesState, setImageState] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${token}&count=9`)
      .then(res => {
        const image = res.data;
        setImageState(image);
      })
      .catch(err => {
        console.error("Houston, we have a problem", err);
      });
  }, []);

  return (
    <div>
      {/*  */}
      <h1>Test</h1>
    </div>
  );
}

export default CarouselGrid;
