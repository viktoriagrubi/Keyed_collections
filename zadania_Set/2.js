//Unikalne elementy tablicy obiektów - Napisz funkcję zwracającą unikalne obiekty z tablicy na podstawie określonego klucza.

const users = [
  { id: 1, name: "Ala" },
  { id: 2, name: "Ola" },
  { id: 1, name: "Alicja" },
];

function uniqueByKey(arr, key) {
  const seen = new Set();
  const result = [];

  for (const obj of arr) {
    const value = obj[key];
    if (!seen.has(value)) {
      seen.add(value);
      result.push(obj);
    }
  }

  return result;
}

const uniqueUsers = uniqueByKey(users, "id");
console.log(uniqueUsers);
