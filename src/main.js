const typeColoes = {
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

// Variable
let pokemonId = 1;
let shiny = false;
let pokemonData = null;

// Element html ciblé avec l'id
const container = document.getElementById("pokedex-app");
const title = document.getElementById("title");
const id = document.getElementById("poke-id");
const height = document.getElementById("height-val");
const weight = document.getElementById("weight-val");
const type = document.getElementById("type-name");
const sprite = document.getElementById("main-sprite");
const shinyBTN = document.getElementById("toggle-shiny");
