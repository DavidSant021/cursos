let pilha = [];
let opcao = '';
do {
    opcao = prompt(`Qunatidades de cartas no baralho:\n${pilha.length}\n\nOpções:\n1 - Adicionar uma carta\n2 - Puxar uma carta\n3 - Sair`);

    switch (opcao) {
        case '1':
            let novaCarta = prompt('Nome da nova carta:');
            pilha.push(novaCarta);
            break
        case '2':
            let cartaRetirada = pilha.pop();
            if (!cartaRetirada) {
                alert('Não há carta há ser puxada.')
            } else {
                alert(`A carta ${cartaRetirada} foi removida do baralho.`);
            }
            break
        case '3':
            alert('Finalizando...');
            break
        default:
            alert('Opção inválida!');
            break
    }
} while (opcao !== '3');