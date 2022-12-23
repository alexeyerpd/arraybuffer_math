import { Daemon } from '../daemon';

test('should be correct Daemon', () => {
  const daemon = new Daemon('daemon');
  expect(daemon).toEqual({
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
