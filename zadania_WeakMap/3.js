// Observer pattern z WeakMap - Zaimplementuj wzorzec obserwator, gdzie listy obserwatorów są przechowywane w WeakMap.

const observerMap = new WeakMap();

function addObserver(obj, callback) {
  if (!observerMap.has(obj)) {
    observerMap.set(obj, []);
  }
  observerMap.get(obj).push(callback);
}

function notify(obj, data) {
  const observers = observerMap.get(obj);
  if (observers) {
    for (const callback of observers) {
      callback(data);
    }
  }
}

function removeObservers(obj) {
  observerMap.delete(obj);
}

const obj = {};

addObserver(obj, (data) => console.log("Observer 1:", data));
addObserver(obj, (data) => console.log("Observer 2:", data));

notify(obj, "Aktualizacja danych");
