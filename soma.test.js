// Função simples de soma
const soma = (a, b) => a + b;

console.log("Iniciando teste de soma...");

if (soma(1, 1) === 2) {
  console.log("Sucesso! O teste de soma passou (1+1=2).");
} else {
  console.error("Erro! O teste falhou.");
  process.exit(1); // Isso avisa ao GitHub que o teste deu erro
}
