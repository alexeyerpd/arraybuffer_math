import { Character } from './character';

export class RangeCharacter extends Character {
  constructor(name, type, attack, defence, health, level) {
    super(name, type, attack, defence, health, level);
    this._stoned = 0;
    this._distance = 1;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get distance() {
    return this._distance;
  }

  set distance(value) {
    this._distance = value;
  }

  get attack() {
    const attack = this.calcAttack();

    if (this.stoned) {
      return attack - Math.log2(this.stoned);
    }

    return attack;
  }

  calcAttack() {
    return this._attack * (1 - (this._distance - 1) / 10);
  }
}
