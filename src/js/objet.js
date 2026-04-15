const res = await fetch("https://pokeapi.co/api/v2/item?limit=2000");
const list = await res.json();

const detail = await fetch("https://pokeapi.co/api/v2/item/1");
const item = await detail.json();

item.name;
item.sprites.default;
item.cost;
item.category.name;
item.effect_entries[0].effect;
item.flavor_text_entries[0].text;
