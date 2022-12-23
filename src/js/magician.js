import { RangeCharacter } from './rangeCharacter';

export class Magician extends RangeCharacter {
  constructor(name) {
    super(name, 'Magician');

    this._attack = 10;
    this._defence = 40;
  }
}
