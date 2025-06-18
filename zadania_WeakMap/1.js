//Prwyatne właściwości obiektów - Użyj WeakMap do implementacji prawdziwie prywatnych właściwości w klasie JavaScript

const privateData = new WeakMap();

class SecretHolder {
  constructor(secret) {
    privateData.set(this, { secret });
  }

  revealSecret() {
    return privateData.get(this).secret;
  }
}

const person = new SecretHolder("tajne hasło");
console.log(person.revealSecret());
console.log(person.secret);
