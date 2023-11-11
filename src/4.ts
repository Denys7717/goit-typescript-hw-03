class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}
  getKey() {
    return this.key;
  }
}

abstract class House {
  public door: boolean;
  public key: Key;
  public tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Open");
    }
  }
}
