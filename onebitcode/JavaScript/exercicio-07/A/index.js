let fila = [];
let opcao = '';
do {
    let pacientes = ''
    for (let i = 0; i < fila.length; i++) {
       pacientes += (i + 1) +  "º - " + fila[i] + '\n'
    }

    opcao = prompt(`Pacientes:\n${pacientes}\n\nOpções:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair`);

    switch (opcao) {
        case '1':
            let novoPaciente = prompt('Nome do novo paciente:');
            fila.push(novoPaciente);
            break
        case '2':
            let pacienteConsultado = fila.shift();
            if (!pacienteConsultado) {
                alert('Não há nenhum paciente na fila.');
            } else {
                alert(`O paciente ${pacienteConsultado} foi removido da fila.`);
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