let dinheiro = parseFloat(prompt('Qual a quantidade inicial de dinheiro? R$'));
let opcao = ''

do {
    opcao = prompt(`Saldo: ${dinheiro}\n\n1 - Somar\n2 - Subtrair\n3 - Sair`);

    switch(opcao) {
        case '1':
            let soma = parseFloat(prompt('Valor a ser acrescentado: R$'));
            dinheiro += soma
            break
        case '2':
            let subtracao = parseFloat(prompt('Valor a ser subtraido: R$'));
            dinheiro -= subtracao
            break
        case '3':
            alert('Finalizando o programa...')
            break
        default:
            alert('Opção invalida! Tente novamente.')
    }
} while (opcao !== '3');
