const res = await fetch("https://pokeapi.co/api/v2/region?limit=10");
const regions = await res.json();

const detail = await fetch("https://pokeapi.co/api/v2/location/1");
const location = await detail.json();

location.name;
location.region.name;
location.areas;

const area = await fetch("https://pokeapi.co/api/v2/location-area/1");
const zone = await area.json();
zone.pokemon_encounters;
