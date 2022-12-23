export class Character {
  static types = [
    'Bowman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie',
  ];

  constructor(name, type, attack, defence, health = 100, level = 1) {
    if (!name || name.length < 2 || name.length > 10) {
      throw new Error('Incorrect name');
    }

    if (!Character.types.includes(type)) {
      throw new Error('Incorrect type');
    }

    this.name = name;
    this.type = type;

    this._health = health;
    this.level = level;

    this._attack = attack;
    this._defence = defence;
  }

  get attack() {
    return this._attack;
  }

  set attack(value) {
    this._attack = value;
  }

  get defence() {
    return this._defence;
  }

  set defence(value) {
    this._defence = value;
  }

  get health() {
    return this._health;
  }

  set health(value) {
    this._health = value;
  }

  levelUp() {
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;

    if (this.health <= 0) {
      throw new Error('нельзя повысить левел умершего');
    }

    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
