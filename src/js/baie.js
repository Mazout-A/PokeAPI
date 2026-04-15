const res = await fetch("https://pokeapi.co/api/v2/berry?limit=100");
const list = await res.json();

const detail = await fetch("https://pokeapi.co/api/v2/berry/1");
const berry = await detail.json();

berry.name;
berry.growth_time;
berry.max_harvest;
berry.natural_gift_power;
berry.flavors[0].flavor.name;
berry.flavors[0].potency;
berry.firmness.name;
