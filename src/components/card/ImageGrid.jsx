import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import { Container, Row } from "reactstrap";

function ImageGrid() {
  const token = "1fEgVleJ77KI0sefAJYab9JMhn8Zw1dVKu2pKTdk";
  const [imageState, setImageState] = useState([]);

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
    <Container>
      <Row>
        {imageState.map((image, index) => {
          return (
            <ImageCard
              key={index}
              title={image.title}
              url={image.url}
              date={image.date}
              explanation={image.explanation}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default ImageGrid;
