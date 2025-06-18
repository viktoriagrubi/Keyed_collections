//Cache z TTL - Zaimplementuj system cache'owania używający Map, gdzie każdy wpis ma określony czas życia (TTL).

class TTLCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, ttl) {
    const expiresAt = Date.now() + ttl;
    this.cache.set(key, { value, expiresAt });

    setTimeout(() => {
      this.cache.delete(key);
    }, ttl);
  }

  get(key) {
    const entry = this.cache.get(key);
    if (!entry) return undefined;

    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return undefined;
    }

    return entry.value;
  }
}

const myCache = new TTLCache();
myCache.set("a", 100, 3000);

console.log(myCache.get("a"));
setTimeout(() => {
  console.log(myCache.get("a"));
}, 3100);
