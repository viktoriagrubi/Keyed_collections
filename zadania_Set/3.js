// Filtr duplikatów z niestandardową logiką - Stwórz funkcję usuwającą duplikaty z tablicy używając Set i niestandardowej funkcji porównania.

function uniqueWithCustomCompare(arr, comparator) {
  const result = [];

  for (const item of arr) {
    const isDuplicate = result.some((existing) => comparator(existing, item));
    if (!isDuplicate) {
      result.push(item);
    }
  }

  return result;
}

const users = [
  { id: 1, name: "Ala" },
  { id: 2, name: "Ola" },
  { id: 1, name: "Alicja" },
];

const uniqueUsers = uniqueWithCustomCompare(users, (a, b) => a.id === b.id);

console.log(uniqueUsers);
