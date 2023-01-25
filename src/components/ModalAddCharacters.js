import React from "react";
import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from "react-bootstrap";
import Close from "../images/Close";
const ModalAddCharacters = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <Modal show={show} className="mt-5">
      <ModalHeader>
        <h3> Agregar un personaje</h3>
        <div onClick={onClose}>
          <Close />
        </div>
      </ModalHeader>
      <ModalBody className="modal-body">
        <Row className="modal-container">
          <Col>
            <label className="">NOMBRE</label>
            <input
              type={"text"}
              id="name"
              className="input-txt"
              //   onChange={handleChange}
            ></input>
            <label>COLOR DE OJOS</label>
            <input
              type={"text"}
              id="eyeColour"
              className="input-txt"
              //   onChange={handleChange}
            ></input>
            <label className="mt-3">GÉNERO</label>
            <div className="">
              <input
                type={"radio"}
                value="female"
                id="genderWoman"
                name="gender"
                // onClick={onClickGender}
              />{" "}
              <label className="me-3" htmlFor="woman">
                Mujer
              </label>
              <input
                type={"radio"}
                value="male"
                id="genderMan"
                name="gender"
                // onClick={onClickGender}
              />{" "}
              <label htmlFor="man">Hombre</label>
            </div>
          </Col>
          <Col>
            <label>CUMPLEAÑOS</label>
            <input
              type={"text"}
              id="dateOfBirth"
              //   onChange={handleChange}
              className="input-txt"
            ></input>
            <label>COLOR DE PELO</label>
            <input
              type={"text"}
              id="hairColour"
              className="input-txt"
              //   onChange={handleChange}
            ></input>
            <label className="mt-3">POSICIÓN</label>
            <div>
              <input
                type={"radio"}
                value="student"
                id="positionStudent"
                name="position"
                // onClick={onClickPosition}
              />{" "}
              <label className="me-3" htmlFor="student">
                Estudiante
              </label>
              <input
                type={"radio"}
                value="staff"
                id="positionStaff"
                name="position"
                // onClick={onClickPosition}
              />{" "}
              <label htmlFor="staff">Staff</label>
            </div>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter className="d-flex justify-content-center">
        <Button className="add-btn" onClick={onClose}>
          Guardar
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default ModalAddCharacters;
