const idade = parseInt(prompt('Informe sua idade:'));
if (idade >= 18) {
    alert('Você é maior de idade');
} else if (idade === 15) {
    alert('Você tem 15 anos');
} else {
    alert('Você é menor de idade')
}

// Operador Ternário
const resultado = (6 === 6) ? 'Verdadeiro' : 'Falso';
