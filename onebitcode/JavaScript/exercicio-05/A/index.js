let opcao = ''
do {
    opcao = prompt(`Escolha uma das opções:\n\n1 - Somar\n2 - Subtrair\n3 - Dividir\n4 - Multiplicar\n5 - Encerrar`);
    switch (opcao) {
        case '1':
            alert('Você escolheu somar.');
            break
        case '2':
            alert('Você escolheu subtrair');
            break
        case '3':
            alert('Você escolheu dividir');
            break
        case '4':
            alert('Você escolheu multiplicar');
            break
        case '5':
            alert('Finalizando o programa...');
            break
        default:
            alert("Entrada inválida! Escolha uma das cinco opções.")
    }
} while (opcao !== '5');
