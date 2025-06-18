// Konwersja Map na obiekt zagnieżdżony - Napisz funkcję konwertującą wielopoziomową Map na zagnieżdżony obiekt JavaScript.

const nestedMap = new Map([
  [
    "user",
    new Map([
      ["name", "Anna"],
      ["age", 30],
    ]),
  ],
  ["active", true],
]);

function mapToObject(map) {
  const obj = {};

  for (const [key, value] of map) {
    if (value instanceof Map) {
      obj[key] = mapToObject(value);
    } else {
      obj[key] = value;
    }
  }
  return obj;
}

console.log(mapToObject(nestedMap));
