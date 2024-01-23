let spaceships = [];
function saveSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    alert(`A nave ${spaceship.name} foi salva.`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find((ship) => {
        return ship.name === name;
    });
    return spaceship;
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`O membro ${member} não pode ser adicionado a nave ${spaceship.name}! Limite máximo exedido.`);
    }
    else {
        spaceship.crew.push(member);
        alert(`O membro ${member} foi adicionado a tripulação da nave ${spaceship.name}`);
    }
}
function sendInMission(spaceship) {
    if (spaceship.inMission) {
        alert(`A nave ${spaceship.name} não pode ser enviada pois já está em uma missão.`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`A nave ${spaceship.name} não pode ser enviada! Quantidade de membros insuficiente.`);
    }
    else {
        spaceship.inMission = true;
        alert(`A nave ${spaceship.name} foi enviada com sucesso!`);
    }
}
function firstMenuOption() {
    const name = prompt('Informe o nome da nave a ser registrada:');
    const pilot = prompt('Informe o nome do piloto da nave:');
    const crewLimit = Number(prompt('Informe o limite de tripulantes da nave:'));
    const confirmation = confirm(`Deseja registrar a nave a seguir?
        Nome: ${name}
        Piloto: ${pilot}
        Limite de tripulantes: ${crewLimit}
    `);
    if (confirmation) {
        saveSpaceship(name, pilot, crewLimit);
    }
    else {
        alert('Registro de nave cancelado.');
    }
}
function secondMenuOption() {
    const name = prompt('Informe o nome do membro que deseja adicionar:');
    const spaceshipName = prompt(`Informe o nome da nave que gostaria de adicionar ${name} a tripulação:`);
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Deseja adicionar ${name} a tripulação da nave ${spaceshipName}?`);
        if (confirmation) {
            addCrewMember(name, spaceship);
        }
        else {
            alert('Adição de membro cancelada!');
        }
    }
    else {
        alert('Nave não encontrada!');
    }
}
function thirdMenuOption() {
    const spaceshipName = prompt('Informe o nome da nave que deseja enviar em missão:');
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Deseja enviar a ${spaceshipName} em missão?`);
        if (confirmation) {
            sendInMission(spaceship);
        }
        else {
            alert(`Envio da nave ${spaceshipName} a missão cancelado!`);
        }
    }
    else {
        alert(`Nave ${spaceshipName} não encotrada!`);
    }
}
function listSpaceships() {
    let list = 'Naves Registradas:\n';
    spaceships.forEach((spaceship) => {
        list += `
        Nome: ${spaceship.name}
        Piloto: ${spaceship.pilot}
        Em missão: ${spaceship.inMission ? 'Sim' : 'Não'}
        Tamanho máximo da tripulação: ${spaceship.crewLimit}
        Tripulantes: ${spaceship.crew.length}
        `;
        spaceship.crew.forEach((member) => {
            list += `  - ${member}\n`;
        });
    });
    alert(list);
}
let userOption = 0;
while (userOption !== 5) {
    const menu = `Painel Principal
        1 - Registrar uma nova nave
        2 - Adicionar membro da tripulação
        3 - Enviar nave em missão
        4 - Listar naves registradas
        5 - Encerrar
    `;
    userOption = Number(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            listSpaceships();
            break;
        case 5:
            alert('Encerrando programa...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
