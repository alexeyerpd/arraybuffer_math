import { RangeCharacter } from './rangeCharacter';

export class Daemon extends RangeCharacter {
  constructor(name) {
    super(name, 'Daemon');

    this._attack = 10;
    this._defence = 40;
  }
}
