import { Character } from '../character';

test('should be created correct character', () => {
  const character = new Character('name', 'Bowman', 1, 1);
  expect(character).toEqual({
    name: 'name',
    type: 'Bowman',
    _health: 100,
    level: 1,
    _attack: 1,
    _defence: 1,
  });
});

test('should be error by name short', () => {
  try {
    new Character('n', 'Bowman', 1, 1);
  } catch (error) {
    expect(error.message).toBe('Incorrect name');
  }
});

test('should be error by name long', () => {
  try {
    new Character('namenamename', 'Bowman', 1, 1);
  } catch (error) {
    expect(error.message).toBe('Incorrect name');
  }
});

test('should be error by type', () => {
  try {
    new Character('name', 'Bowmans', 1, 1);
  } catch (error) {
    expect(error.message).toBe('Incorrect type');
  }
});

test('test positive damage', () => {
  const bowman = new Character('bowman', 'Bowman', 25, 25);
  bowman.damage(10);
  expect(bowman.health).toBe(92.5);
});

test('test damage with zero health', () => {
  const bowman = new Character('bowman', 'Bowman', 25, 25, 0);
  bowman.damage(10);
  expect(bowman.health).toBe(0);
});

test('test levelUp method', () => {
  const bowman = new Character('bowman', 'Bowman', 25, 25, 80);
  bowman.levelUp();
  expect(bowman).toEqual({
    name: 'bowman',
    type: 'Bowman',
    _health: 100,
    level: 2,
    _attack: 30,
    _defence: 30,
  });
});

test('test levelUp method - should be error', () => {
  const bowman = new Character('bowman', 'Bowman', 25, 25, 0);
  try {
    bowman.levelUp();
  } catch (error) {
    expect(error.message).toBe('нельзя повысить левел умершего');
  }
});
