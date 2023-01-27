import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    allCharacters: [],
    isStudent: false,
    isStaff: false,
    favorites: localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : [],
  },
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload.characters;
      state.allCharacters = action.payload.characters;
    },
    addCharacter: (state, action) => {
      state.characters = [...state.characters, action.payload.character];
    },
    filterCharacter: (state, action) => {
      state.isStudent = action.payload.isStudent;
      state.isStaff = action.payload.isStaff;
      if (state.isStudent) {
        state.characters = state.allCharacters.filter(
          (character) => character.hogwartsStudent === state.isStudent
        );
      }
      if (state.isStaff) {
        state.characters = state.allCharacters.filter(
          (character) => character.hogwartsStaff === state.isStaff
        );
      }
      if (!state.isStudent && !state.isStaff) {
        state.characters = state.allCharacters;
      }
    },
    setFavorite: (state, action) => {
      const favIndex = state.favorites.findIndex(
        (fav) => fav.name === action.payload.name
      );
      if (favIndex >= 0) {
        state.favorites[favIndex].favsQuantity = 1;
      } else {
        const tempFav = { ...action.payload, favsQuantity: 1 };
        state.favorites.push(tempFav);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFavorite(state, action) {
      const removedFavorites = state.favorites.filter(
        (fav) => fav.name !== action.payload.name
      );
      state.favorites = removedFavorites;
    },
  },
});
export const {
  addCharacter,
  setCharacters,
  filterCharacter,
  setFavorite,
  removeFavorite,
} = charactersSlice.actions;
