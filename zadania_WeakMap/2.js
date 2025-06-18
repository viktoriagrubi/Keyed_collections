//Metadata dla obiektów DOM - Stwórz system przechowywania metadanych dla elementów DOM używając WeakMap.
const { JSDOM } = require("jsdom");
const { document } = new JSDOM().window;

const metadataStore = new WeakMap();

function setMetadata(element, metadata) {
  metadataStore.set(element, metadata);
}

function getMetadata(element) {
  return metadataStore.get(element);
}

function removeMetadata(element) {
  metadataStore.delete(element);
}

const div = document.createElement("div");

setMetadata(div, { createdBy: "user123", timestamp: Date.now() });

console.log(getMetadata(div));

removeMetadata(div);

console.log(getMetadata(div));
