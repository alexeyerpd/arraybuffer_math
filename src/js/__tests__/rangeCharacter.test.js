import { RangeCharacter } from '../rangeCharacter';

let character;

beforeEach(() => {
  character = new RangeCharacter('daemon', 'Daemon', 10, 40);
});

test('RangeCharacter - default', () => {
  expect(character).toEqual({
    name: 'daemon',
    type: 'Daemon',
    _health: 100,
    level: 1,
    _attack: 10,
    _defence: 40,
    _distance: 1,
    _stoned: 0,
  });
});

test.each([
  [1, 1],
  [2, 0.9],
  [3, 0.8],
  [4, 0.7],
  [5, 0.6],
  [6, 0.5],
  [7, 0.4],
  [8, 0.3],
  [9, 0.2],
  [10, 0.1],
  [11, 0],
])(
  'RangeCharacter - attack depending on the distance',
  (distance, resultFactor) => {
    character.distance = distance;
    expect(character.attack).toBeCloseTo(character._attack * resultFactor);
  },
);

test.each([0, 1, 2, 3, 4])(
  'RangeCharacter - attack depending on the stoned',
  (stoned) => {
    character.stoned = stoned;

    if (stoned === 0) {
      expect(character.attack).toBe(character._attack);
    } else {
      expect(character.attack).toBe(
        character._attack - Math.log2(character.stoned),
      );
    }
  },
);

test.each([
  [1, 0],
  [2, 1],
  [3, 2],
  [4, 3],
])(
  'RangeCharacter - attack depending on the distance and the stoned',
  (distance, stoned) => {
    character.distance = distance;
    character.stoned = stoned;

    if (stoned === 0) {
      expect(character.attack).toBe(character.calcAttack());
    } else {
      expect(character.attack).toBeCloseTo(character.calcAttack() - Math.log2(character.stoned));
    }

    expect(character.stoned).toBe(character._stoned);
    expect(character.distance).toBe(character._distance);
  },
);
