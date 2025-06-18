//Memoization dla obiektów - Napisz funkcję memoizującą wyniki obliczeń dla obiektów używając WeakMap jako cache.

function memoizeObjectFunction(fn) {
  const cache = new WeakMap();

  return function (obj) {
    if (cache.has(obj)) {
      return cache.get(obj);
    }

    const result = fn(obj);
    cache.set(obj, result);
    return result;
  };
}

function compute(obj) {
  console.log("Obliczam...");
  return obj.value * 2;
}

const memoized = memoizeObjectFunction(compute);

const a = { value: 5 };

console.log(memoized(a));
console.log(memoized(a));

const b = { value: 10 };
console.log(memoized(b));
console.log(memoized(b));
