import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import BookmarkSelected from "../images/BookmarkSelected";
import BookmarkUnselected from "../images/BookmarkUnselected";
import { setFavorite } from "../redux/characters";

const Cards = ({ characters }) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const handleAddToFavorites = (characters) => {
    dispatch(setFavorite(characters));
    setSelected(!selected);
  };
  return (
    <>
      <Card className="m-1" style={{ width: "30rem" }}>
        <div className="d-flex align-items-start">
          <div></div>
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
            <div className="d-flex justify-content-between">
              <span className="text-secondary fw-light">
                {characters.alive === true ? "VIVO/" : "FINADO/"}
                {characters.hogwartsStudent === true ? "ESTUDIANTE" : "STAFF"}
              </span>
              <div
                onClick={() => {
                  handleAddToFavorites(characters);
                }}
                className="cursor-pointer d-flex justify-content-end position-absolute top-0 end-0 me-4 mt-1"
              >
                {selected ? <BookmarkSelected /> : <BookmarkUnselected />}
              </div>
            </div>
            <h2 className="name">{characters.name} </h2>
            <Row>
              <Col className="fw-bolder">Cumpleaños:</Col>
              <Col className=""> {characters.dateOfBirth} </Col>
            </Row>
            <Row>
              <Col className="fw-bolder">Género:</Col>
              <Col> {characters.gender} </Col>
            </Row>
            <Row>
              <Col className="fw-bolder">Color de ojos:</Col>
              <Col> {characters.eyeColour} </Col>
            </Row>
            <Row>
              <Col className="fw-bolder">Color de pelo:</Col>
              <Col className=""> {characters.hairColour} </Col>
            </Row>
          </div>
        </div>
      </Card>
    </>
  );
};
export default Cards;
