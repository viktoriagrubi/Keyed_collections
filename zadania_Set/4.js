//Walidator unikalności - Zaimplementuj klasę walidującą unikalność wartości w czasie rzeczywistym używając Set.

class UniqueValidator {
  constructor() {
    this.values = new Set();
  }

  isUnique(value) {
    return !this.values.has(value);
  }

  add(value) {
    if (this.isUnique(value)) {
      this.values.add(value);
      return true;
    }
    return false;
  }

  remove(value) {
    this.values.delete(value);
  }
}

const validator = new UniqueValidator();

console.log(validator.isUnique("ala"));
validator.add("ala");
console.log(validator.isUnique("ala"));
console.log(validator.add("ala"));
validator.remove("ala");
console.log(validator.isUnique("ala"));
