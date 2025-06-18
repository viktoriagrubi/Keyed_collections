//Grupowanie obiektów - Stwórz funkcję grupującą tablicę obiektów według określonego klucza, zwracającą Map.

const users = [
  { name: "Anna", age: 30 },
  { name: "Bartek", age: 25 },
  { name: "Celina", age: 30 },
];

function groupBy(array, key) {
  const grouped = new Map();

  for (const item of array) {
    const keyValue = item[key];

    if (grouped.has(keyValue)) {
      grouped.get(keyValue).push(item);
    } else {
      grouped.set(keyValue, [item]);
    }
  }

  return grouped;
}

const groupedByAge = groupBy(users, "age");
console.log(groupedByAge);
