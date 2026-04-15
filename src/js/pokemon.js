export async function fetchAllPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1302");
  const list = await res.json();
  return list.results;
}

export async function fetchPokemonDetail(url) {
  const detail = await fetch(url);
  const pokemon = await detail.json();
  return pokemon;
}
