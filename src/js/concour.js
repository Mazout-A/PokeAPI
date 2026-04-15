const res = await fetch("https://pokeapi.co/api/v2/contest-type?limit=10");
const list = await res.json();

const detail = await fetch("https://pokeapi.co/api/v2/contest-type/1");
const contest = await detail.json();

contest.name;
contest.berry_flavor.name;
contest.names[0].name;

const eff = await fetch("https://pokeapi.co/api/v2/contest-effect/1");
const effect = await eff.json();
effect.appeal;
effect.jam;
