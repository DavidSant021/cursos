let opcao = '';
let imoveisCadastrados = [];

do {
    opcao = prompt(`Imóveis cadastrados: ${imoveisCadastrados.length}\n\nOpções:\n1 - Salvar um novo imóvel\n2 - Mostrar imóveis salvos\n3 - Sair`);

    switch (opcao) {
        case '1':
            let imovel = {}
            imovel.nomeProprietario = prompt('Nome do Proprietário:');
            imovel.quartos = parseInt(prompt('Quantidade de Quartos:'));
            imovel.banheiros = parseInt(prompt('Quantidade de Banheiros:'));
            imovel.garagem = prompt('Pussui garagem?\n\n1 - Sim\n2 - Não');

            switch (imovel.garagem) {
                case '1':
                    imovel.garagem = 'Sim';
                    break
                case '2':
                    imovel.garagem = 'Não';
                    break
                default:
                    imovel.garagem = 'Não informado corretamente.';
                    break
            }

            const confirma = confirm(`Nome do proprietário: ${imovel.nomeProprietario}\nQuantidade de quartos: ${imovel.quartos}\nQuantidade de banheiros: ${imovel.banheiros}\nGaragem: ${imovel.garagem}\n\nDeseja cadastrar esse imóvel?`);

            if (confirma) {
                imoveisCadastrados.push(imovel);
                alert('Imóvel cadastrado com sucesso.');
            } else {
                alert('Imóvel não foi cadastrado.');
            }
            break
        case '2':
            if (imoveisCadastrados.length > 0) {
                for (let i = 0; i < imoveisCadastrados.length; i++) {
                    alert(`Imóvel ${i + 1}:\n\nNome do proprietário: ${imoveisCadastrados[i].nomeProprietario}\nQuantidade de quartos: ${imoveisCadastrados[i].quartos}\nQuantidade de banheiros: ${imoveisCadastrados[i].banheiros}\nGaragem: ${imoveisCadastrados[i].garagem}`);
                }
            } else {
                alert('Nenhum imóvel cadastrado no sistema.');
            }
            break
        case '3':
            alert('Finalizando o programa...');
            break
        default:
            alert('Opção inválida!');
            break
    }
} while (opcao !== '3');