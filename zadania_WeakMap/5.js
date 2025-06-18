//Tracking stanu obiektów - Stwórz system śledzenia zmian w obiektach używając WeakMap do przechowywania oryginalnych wartości.

const originalStateMap = new WeakMap();

function trackObject(obj) {
  const copy = JSON.parse(JSON.stringify(obj));
  originalStateMap.set(obj, copy);
}

function hasChanged(obj) {
  const original = originalStateMap.get(obj);
  if (!original) return false;

  return JSON.stringify(original) !== JSON.stringify(obj);
}

const user = { name: "Ewa", age: 30 };

trackObject(user);
user.age = 31;

console.log(hasChanged(user));

user.age = 30;

console.log(hasChanged(user));
