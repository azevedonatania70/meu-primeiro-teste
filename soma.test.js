const soma = (a, b) => a + b;

test('deve somar 1 + 1 e o resultado ser 2', () => {
  expect(soma(1, 1)).toBe(2);
});

test('deve somar 5 + 5 e o resultado ser 10', () => {
  expect(soma(5, 5)).toBe(10);
});