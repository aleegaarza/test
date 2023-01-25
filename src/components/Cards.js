import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Cards = ({ characters }) => {
  return (
    <>
      <Card className="m-1" style={{ width: "30rem" }}>
        <div className="d-flex align-items-start">
          <div
            className={
              characters.house === "Gryffindor"
                ? "bg-imgGryffindor"
                : "" || characters.house === "Slytherin"
                ? "bg-imgSlytherin"
                : "" || characters.house === "Hufflepuff"
                ? "bg-imgHufflepuff"
                : "" || characters.house === "Ravenclaw"
                ? "bg-imgRavenclaw"
                : "" || characters.house === ""
                ? "bg-imgnull"
                : ""
            }
          >
            <img className="img" src={characters.image} alt={characters.name} />
          </div>
          <div className="ms-4">
            <span className="text-secondary fw-light">
              {characters.alive === true ? "VIVO/" : "FINADO/"}
              {characters.hogwartsStudent === true ? "ESTUDIANTE" : "STAFF"}
            </span>
            <h2 className="name">{characters.name} </h2>
            <Row>
              <Col className="bold">Cumpleaños:</Col>
              <Col className=""> {characters.dateOfBirth} </Col>
            </Row>
            <Row>
              <Col className="bold">Género:</Col>
              <Col> {characters.gender} </Col>
            </Row>
            <Row>
              <Col className="bold">Color de ojos:</Col>
              <Col> {characters.eyeColour} </Col>
            </Row>
            <Row>
              <Col className="bold">Color de pelo:</Col>
              <Col className=""> {characters.hairColour} </Col>
            </Row>
          </div>
        </div>
      </Card>
    </>
  );
};
export default Cards;
