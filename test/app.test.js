const soma = require('../index');

function testSoma() {
  if (soma(2,3) !== 5) {
    console.error("Teste falhou!");
    process.exit(1);
  } else {
    console.log("Teste passou!");
  }
}

testSoma();
