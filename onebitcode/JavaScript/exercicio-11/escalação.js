function addPlayer() {
    const position = document.getElementById('posicao').value
    const name = document.getElementById('nome').value
    const number = document.getElementById('numero').value

    const confirmacao = confirm(`Deseja escalar o jogador ${name}, na posição ${position}?`);

    if (confirmacao) {
        const teamList = document.getElementById('team-list');
        const playerItem = document.createElement('li');
        playerItem.id = 'player' + number
        playerItem.innerText = `${position}: ${name} (${number})`
        teamList.appendChild(playerItem);

        document.getElementById('posicao').value = ''
        document.getElementById('nome').value = ''
        document.getElementById('numero').value = ''
    }
}

function removePlayer() {
    const number = document.getElementById('num').value
    const playerToRemove = document.getElementById('player' + number);

    const confirmacao = confirm(`Remover o jogador ${playerToRemove.innerText}?`);

    if (confirmacao) {
        //document.getElementById('team-list').removeChild(playerToRemove);
        playerToRemove.remove()
        document.getElementById('num').value = ''
    }
}
