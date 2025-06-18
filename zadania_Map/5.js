//Merge dwóch Map - Zaimplementuj funkcję łączącą dwie Map, gdzie konflikty kluczy są rozwiązywane przez funkcję callback.

function sumResolver(val1, val2) {
  return val1 + val2;
}

function mergeMaps(map1, map2, conflictResolver) {
  const result = new Map();

  for (const [key, value] of map1) {
    result.set(key, value);
  }

  for (const [key, value] of map2) {
    if (result.has(key)) {
      const newValue = conflictResolver(result.get(key), value);
      result.set(key, newValue);
    } else {
      result.set(key, value);
    }
  }

  return result;
}

const mapA = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

const mapB = new Map([
  ["b", 10],
  ["c", 20],
  ["d", 30],
]);

const merged = mergeMaps(mapA, mapB, sumResolver);

for (const [key, value] of merged) {
  console.log(key, value);
}
