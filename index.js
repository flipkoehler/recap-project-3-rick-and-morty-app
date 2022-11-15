import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// get data from API

async function fetchCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
      console.error("läuft nicht: ", response.status);
    } else {
      console.log(response);
      const data = await response.json();
      const results = data.results;
      results.forEach((character) => {
        const name = character.name;
        const status = character.status;
        const image = character.image;
        const type = character.type;
        const occurrences = character.episode.length;
        createCharacterCard(image, name, status, type, occurrences);
      });
    }
  } catch (error) {
    console.error("Die Daten sind nicht erreichbar");
  }
}

fetchCharacters();
