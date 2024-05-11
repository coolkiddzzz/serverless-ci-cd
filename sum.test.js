const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 9 to equal 10', () => {
    expect(sum(2, 9)).toBe(11);
  });