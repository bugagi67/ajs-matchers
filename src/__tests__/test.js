import sortCharacters from '../app';

test('test of sort by health', () => {
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortCharacters();

  expect(result).toEqual(expected);
});
