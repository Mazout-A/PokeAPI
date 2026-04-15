import { fetchAllPokemon, fetchPokemonDetail } from "./js/pokemon.js";

const typeColors = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

// Variables
let pokemonList = [];
let currentIndex = 0; // Utilisation de l'index pour la navigation
let shiny = false;
let pokemonData = null;

// Éléments html ciblés avec l'id
const container = document.getElementById("pokedex-app");
const title = document.getElementById("title");
const id = document.getElementById("poke-id");
const height = document.getElementById("height-val");
const weight = document.getElementById("weight-val");
const type = document.getElementById("type-name");
const sprite = document.getElementById("main-sprite");
const shinyBTN = document.getElementById("toggle-shiny");

// Fonction démarrage
async function initApp() {
  title.textContent = "CHARGEMENT...";

  pokemonList = await fetchAllPokemon();

  chargerPokemon(currentIndex);
}

// Fonction récupération et affichage du pokemon
async function chargerPokemon(index) {
  title.textContent = "Chargement...";

  const targetURL = pokemonList[index].url;

  pokemonData = await fetchPokemonDetail(targetURL);

  title.textContent =
    pokemonData.name.charAT(0).toUpperCase() + pokemonData.name.slice(1);
  id.textContent = `#${String(index + 1).padStart(4, "0")}`; // S majuscule à String
  height.textContent = (pokemonData.height / 10).toFixed(1); // pokemonData bien orthographié
  weight.textContent = (pokemonData.weight / 10).toFixed(1); // pokemonData bien orthographié

  const typeName = pokemonData.types[0].type.name; // types avec un "s"
  type.textContent = typeName;

  if (typeColors[typeName]) {
    container.style.backgroundColor = typeColors[typeName]; // backgroundColor
  }

  updateSprite();
}

// Fonction image normale et shiny
function updateSprite() {
  if (!pokemonData) return;

  if (shiny) {
    sprite.src = pokemonData.sprites.front_shiny;
  } else {
    sprite.src = pokemonData.sprites.other["official-artwork"].front_default; // sprite bien orthographié
  }
}

// Btn shiny
shinyBTN.addEventListener("click", () => {
  shiny = !shiny;
  updateSprite(); // Parenthèses ajoutées
});

// Navigation clavier
document.addEventListener("keydown", (event) => {
  if (pokemonList.length === 0) return;

  if (event.key === "ArrowUp" && currentIndex > 0) {
    currentIndex--;
    shiny = false;
    chargerPokemon(currentIndex);
  } else if (
    event.key === "ArrowDown" &&
    currentIndex < pokemonList.length - 1
  ) {
    currentIndex++;
    shiny = false;
    chargerPokemon(currentIndex);
  }
});

// Lancement au démarrage
initApp(); // Parenthèses ajoutées
