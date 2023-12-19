const nome = 'David'; // String
const nome1 = "David"; // String
const nome2 = `David`; // String
const num1 = 10; // number
const num2 = 10.50; // number
let nomeAluno; // undefined -> não aponta para local nenhum da memória
const sobrenomeAluno = null; // nulo -> não aponta para local nenhum da memória
const aprovado = true; // Boolean = true, false (lógico)

console.log(typeof aprovado, aprovado);

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2
