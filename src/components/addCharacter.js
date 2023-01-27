import { setCharacters, addCharacter } from "../redux/characters";

export const getCharacters = () => {
  return async (dispatch) => {
    const resp = await fetch(`http://localhost:3500/characters`);
    const data = await resp.json();
    dispatch(setCharacters({ characters: data }));
  };
};

export const postCharacters = (character) => {
  return async (dispatch) => {
    fetch(`http://localhost:3500/characters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(character),
    })
      .then((response) => response.json())
      .then((addedcharacter) => {
        dispatch(addCharacter({ character: addedcharacter }));
      });
  };
};
