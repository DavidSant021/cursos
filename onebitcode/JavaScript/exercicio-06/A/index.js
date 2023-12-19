const numero = parseInt(prompt('Digite um número para ver a taboada:'));
let resultado = ''
for (let i = 1; i <= 20; i++) {
    resultado += ' -> ' + numero + ' * ' + i + ' = ' + (numero * i) + '\n'
}
alert(`Resultado da taboada de ${numero}:\n\n${resultado}`)