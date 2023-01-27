import React, { useEffect, useState } from "react";
import Bookmark from "../images/Bookmark_fill";
import AddUser from "../images/AddUser";
import HarryPotter from "../images/HarryPotter";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModalAddCharacters from "./ModalAddCharacters";
import Cards from "./Cards";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "./addCharacter";
import {
  filterCharacter,
  removeFavorite,
  setFavorite,
} from "../redux/characters";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import Trash from "../images/Trash";
const HomePage = () => {
  const { characters, favorites } = useSelector((state) => state.characters);
  const { isStudent, isStaff } = useSelector((state) => state.characters);
  const [show, setShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();

  const toggleDropDown = () => {
    setDropdown(!dropdown);
  };
  const handleRemoveFav = (characters) => {
    dispatch(removeFavorite(characters));
    console.log(characters);
  };
  useEffect(() => {
    dispatch(getCharacters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-end me-5">
        <Dropdown isOpen={dropdown} toggle={toggleDropDown}>
          <DropdownToggle
            className="btnnav"
            style={{
              backgroundColor: "#6b63b5",
            }}
          >
            Favoritos <Bookmark />
          </DropdownToggle>
          <DropdownMenu className="favs-dropdown">
            <div className="d-flex flex-column ms-2 align-items-center justify-content-center">
              {favorites?.map((character) => (
                <div className="d-flex" key={character.name}>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      className="fav-img me-2"
                      src={character.image}
                      alt={characters.name}
                    />
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <p className="fw-semibold text-white dropdown-txt me-4">
                      {character.name}{" "}
                    </p>
                  </div>
                  <div
                    onClick={() => handleRemoveFav(character)}
                    className="delete d-flex align-items-center"
                  >
                    <Trash />
                  </div>
                </div>
              ))}
            </div>
          </DropdownMenu>
        </Dropdown>

        <Button
          type="button"
          className="btnnav"
          onClick={() => {
            setShow(true);
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
        <Button
          onClick={() => dispatch(filterCharacter({ isStudent: !isStudent }))}
          className={isStudent ? "btns btnsactive w-25" : "btns w-25"}
        >
          <div>ESTUDIANTES</div>
        </Button>
        <Button
          onClick={() => dispatch(filterCharacter({ isStaff: !isStaff }))}
          className={isStaff ? "btns btnsactive w-25" : "btns w-25"}
        >
          STAFF
        </Button>
      </Col>
      <div className="cards-container">
        {characters?.map((characters, id) => {
          return (
            <Cards key={id} characters={characters} favorites={favorites} />
          );
        })}
      </div>
      <ModalAddCharacters show={show} onClose={() => setShow(false)} />
    </div>
  );
};

export default HomePage;
