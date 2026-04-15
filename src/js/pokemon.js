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

export async function eveloutionChain(pokemonId) {
  const res1 = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`,
  );
  const species = await res1.json();

  const res2 = await fetch(species.evolution_chain.url);
  const chain = await res2.json();

  const evolutions = [];
  let current = chain.chain;

  while (current) {
    evolutions.push(current.species.name);
    current = current.evolves_to[0] || null;
  }

  return evolutions;
}
