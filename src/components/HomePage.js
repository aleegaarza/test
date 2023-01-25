import React, { useState } from "react";
import Bookmark from "../images/Bookmark_fill";
import AddUser from "../images/AddUser";
import HarryPotter from "../images/HarryPotter";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModalAddCharacters from "./ModalAddCharacters";

const HomePage = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="d-flex justify-content-end me-5">
        <Button type="button" className="btnnav">
          Favoritos <Bookmark />
        </Button>
        <Button
          type="button"
          className="btnnav"
          onClick={() => {
            setShow(true);
            console.log(setShow);
          }}
        >
          Agregar <AddUser />
        </Button>
      </div>
      <Row className="d-flex justify-content-center mt-5">
        <HarryPotter />
        <h3 className="d-flex justify-content-center text-white">
          Selecciona tu filtro
        </h3>
      </Row>
      <Col className="d-flex justify-content-center mt-5" sm={12} lg={12}>
        <Button className="btns w-25"> ESTUDIANTES</Button>
        <Button className="btns w-25">STAFF</Button>
      </Col>
      <div className="cards-container"></div>
      <ModalAddCharacters show={show} onClose={() => setShow(false)} />
    </div>
  );
};

export default HomePage;
