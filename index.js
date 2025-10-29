function soma(a, b) {
  return a + b;
}

module.exports = soma;

// Para rodar sozinho
if (require.main === module) {
  console.log("2 + 3 =", soma(2,3));
}

