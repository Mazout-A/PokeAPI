const res = await fetch("https://pokeapi.co/api/v2/move?limit=1000");
const list = await res.json();

const detail = await fetch("https://pokeapi.co/api/v2/move/thunderbolt");
const move = await detail.json();

move.name;
move.type.name;
move.power;
move.accuracy;
move.pp;
move.damage_class.name;
move.effect_entries[0].effect;
