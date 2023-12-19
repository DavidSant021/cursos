const vagas = [];

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        //1. nome, (x candidatos)
        textoFinal += indice + '. '
        textoFinal += vaga.nome
        textoFinal += ' (' + vaga.candidatos.length + ' candidatos)\n'
        return textoFinal
    }, '')
    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt('Informe um nome para a vaga:');
    const descricao = prompt('Informe uma descrição para a vaga:');
    const dataLimite = prompt('Informe uma data limite para a vaga: (dd/mm/aaaa)');

    const confirmacao = confirm(`Deseja criar uma nova vaga com essas informações?\n\n
    Nome: ${nome}\n
    Descrição: ${descricao}\n
    Data limite: ${dataLimite}`);

    if (confirmacao) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert('Nova vaga criada com sucesso.')
    } else {
        alert('Nova vaga não foi criada.')
    }
}

function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir:")
    if (indice >= vagas.length || indice < 0) {
        alert('Índice inválido');
        return
    }
    const vaga = vagas[indice]
  
    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")
  
    alert(
      "Vaga nº " + indice +
      "\nNome: " + vaga.nome +
      "\nDescrição: " + vaga.descricao +
      "\nData limite: " + vaga.dataLimite +
      "\nQuantidade de candidatos: " + vaga.candidatos.length +
      "\nCandidatos inscritos:" + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const candidato = prompt('Informe o nome do(a) candidato(a):');
    const indice = Number(prompt('Informe o índice da vaga para a qual a(a) candidato(a) deseja se inscrever:'));
    const vaga = vagas[indice]

    const confirmacao = confirm(
        'Deseja increver o candidato ' + candidato + ' na vaga ' + indice + '?\n' +
        'Nome ' + vaga.nome + '\nDescrição: ' + vaga.descricao + '\nData limite: ' + vaga.dataLimite
    )

    if (confirmacao) {
        vaga.candidatos.push(candidato);
        alert('Inscrição realizada com sucesso.');
    } else {
        alert('Inscrição cancelada.');
    }
}

function excluirVaga() {
    const indice = Number(prompt('Informe o índice da vaga que deseja excluir:'));
    const vaga = vagas[indice];

    const confirmacao = confirm(
        'Tem certeza que deseja excluir a vaga ' + indice + '?\n' +
        'Nome ' + vaga.nome + '\nDescrição: ' + vaga.descricao + '\nData limite: ' + vaga.dataLimite
    )

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert('Vaga excluída com sucesso.')
    } else {
        alert('Vaga não foi excluída.')
    }
}

function exibirMenu() {
    const opcao = Number(prompt(`Sistema de Vagas de Emprego:\n\n
    1 - Listar vagas disponníveis\n
    2 - Criar uma nova vaga\n
    3 - Vizualizar uma vaga\n
    4 - Inscrever um candidato em uma vaga\n
    5 - Excluir uma vaga\n
    6 - Sair`));
    return opcao
}

function executar() {
    let opcao = ''

    do {
        opcao = exibirMenu()

        switch(opcao) {
            case 1:
                listarVagas()
                break
            case 2:
                novaVaga()
                break
            case 3:
                exibirVaga()
                break
            case 4:
                inscreverCandidato()
                break
            case 5:
                excluirVaga()
                break
            case 6:
                alert('Finalizando programa...')
                break
            default:
                alert('Opção inválida!')
        }
    } while(opcao !== 6)
}

executar()
