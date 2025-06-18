//Operacje na zbiorach - Zaimplementuj funkcje: union, intersection, difference i symmetric difference dla dwóch Set.

function union(setA, setB) {
  return new Set([...setA, ...setB]);
}

function intersection(setA, setB) {
  return new Set([...setA].filter((x) => setB.has(x)));
}

function difference(setA, setB) {
  return new Set([...setA].filter((x) => !setB.has(x)));
}

function symmetricDifference(setA, setB) {
  const onlyInA = difference(setA, setB);
  const onlyInB = difference(setB, setA);
  return union(onlyInA, onlyInB);
}

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

console.log("Union:", [...union(setA, setB)]);
console.log("Intersection:", [...intersection(setA, setB)]);
console.log("Difference A - B:", [...difference(setA, setB)]);
console.log("Symmetric Difference:", [...symmetricDifference(setA, setB)]);
