import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postCharacters } from "./addCharacter";
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
  const dispatch = useDispatch();

  const [character, setCharacter] = useState({ id: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCharacter({ ...character, [id]: value });
  };

  const onClickGender = (e) => {
    const { value } = e.target;
    setCharacter({ ...character, gender: value });
  };

  const onClickPosition = (e) => {
    const { value } = e.target;
    const staff = value === "staff" ? true : false;
    const student = value === "student" ? true : false;
    setCharacter({
      ...character,
      hogwartsStaff: staff,
      hogwartsStudent: student,
    });
  };

  useEffect(() => {
    setCharacter({ ...character, id: new Date().getUTCMilliseconds() });
  }, []);
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
        <Row>
          <Col>
            <label>NOMBRE</label>
            <input
              type={"text"}
              id="name"
              className="input-txt"
              onChange={handleChange}
            ></input>
            <label>COLOR DE OJOS</label>
            <input
              type={"text"}
              id="eyeColour"
              className="input-txt mb-2"
              onChange={handleChange}
            ></input>
            <label>GÉNERO</label>
            <div className="">
              <input
                type={"radio"}
                value="female"
                id="genderWoman"
                name="gender"
                onClick={onClickGender}
              />{" "}
              <label className="me-3" htmlFor="woman">
                Mujer
              </label>
              <input
                type={"radio"}
                value="male"
                id="genderMan"
                name="gender"
                onClick={onClickGender}
              />{" "}
              <label htmlFor="man">Hombre</label>
            </div>
          </Col>
          <Col>
            <label>CUMPLEAÑOS</label>
            <input
              type={"text"}
              id="dateOfBirth"
              onChange={handleChange}
              className="input-txt"
            ></input>
            <label>COLOR DE PELO</label>
            <input
              type={"text"}
              id="hairColour"
              className="input-txt mb-2"
              onChange={handleChange}
            ></input>
            <label>POSICIÓN</label>
            <div>
              <input
                type={"radio"}
                value="student"
                id="positionStudent"
                name="position"
                onClick={onClickPosition}
              />{" "}
              <label className="me-3" htmlFor="student">
                Estudiante
              </label>
              <input
                type={"radio"}
                value="staff"
                id="positionStaff"
                name="position"
                onClick={onClickPosition}
              />{" "}
              <label htmlFor="staff">Staff</label>
            </div>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter className="d-flex justify-content-center">
        <Button
          type="submit"
          className="add-btn"
          onClick={() => dispatch(postCharacters(character), onClose())}
        >
          Guardar
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default ModalAddCharacters;
