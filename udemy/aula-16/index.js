const alunos = ['David', 'Ester', 'Manu'];
alunos[1] = 'Lenilda';
alunos[3] = 'Ocland';

// console.log(alunos.length)
// alunos[alunos.length] = 'Outro';
// alunos.push('MaisUm');  // Adiciona no final do Arrays
// alunos.unshift('Luiza');  // Adiciona no inicio
// alunos.pop();  // Remove o último e é possivel salvar o removido em uma variavel
// alunos.shift();  // Remove o primeiro e é igual ao pop
// delete alunos[1];  // Apaga o indice 1 porem não muda os demais indices
// alunos.slice(0, 3);  // Pega e fatia mostrando do indice 0 ao 2
console.log(alunos instanceof Array);  // Pergunto se é um array e retorna valor bool