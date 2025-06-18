//Set z limitem rozmiaru - Stwórz rozszerzenie Set, które automatycznie usuwa najstarsze elementy po przekroczeniu limitu.

class LimitedSet extends Set {
  constructor(limit, iterable) {
    super(iterable);
    this.limit = limit;
  }

  add(value) {
    if (this.has(value)) {
      return this;
    }

    if (this.size >= this.limit) {
      const oldest = this.values().next().value;
      this.delete(oldest);
    }

    super.add(value);

    return this;
  }
}

const limitedSet = new LimitedSet(3);

limitedSet.add(1);
limitedSet.add(2);
limitedSet.add(3);
console.log([...limitedSet]);
limitedSet.add(4);
console.log([...limitedSet]);
limitedSet.add(2);
console.log([...limitedSet]);
