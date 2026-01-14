// Um teste simples: verificamos se 1 + 1 é igual a 2
test('Verifica se a soma de 1 + 1 é 2', () => {
  if (1 + 1 !== 2) {
    throw new Error("O teste falhou! 1 + 1 não deu 2");
  }
  console.log("Sucesso! O teste de soma passou.");
});
