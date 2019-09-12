import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg, Col } from "reactstrap";

const ImageCard = props => {
  if (!props.title && !props.url) {
    return <h1>Loading...</h1>;
  }

  return (
    <Col xs="6" sm="4">
      <Card>
        <CardImg top width="100%" src={props.url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.explanation}</CardText>
          <CardText>
            <small className="text-muted">{props.date}</small>
          </CardText>
        </CardBody>
      </Card>
      <br />
    </Col>
  );
};

export default ImageCard;
