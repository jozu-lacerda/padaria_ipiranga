// tipos de dados (number)

let idade = 30;
let precoProduto = 49.99;

let resultadoCalculo = idade + precoProduto;
console.log(`O resultado do cálculo é ${resultadoCalculo.toFixed(2)}`); // template literals
console.log("O resultado do cálculo é " + resultadoCalculo); // concatenação

let estaLogado = true;
let temPermissao = false;
console.log(estaLogado);

let maiorDeIdade = false;

if (maiorDeIdade) {
  console.log("Pode entrar no site");
} else {
  console.log("Acesso Negado");
}
