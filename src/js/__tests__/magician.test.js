import { Magician } from '../magician';

test('should be correct Magician', () => {
  const magician = new Magician('magician');
  expect(magician).toEqual({
    name: 'magician',
    type: 'Magician',
    _health: 100,
    level: 1,
    _attack: 10,
    _defence: 40,
    _distance: 1,
    _stoned: 0,
  });
});
