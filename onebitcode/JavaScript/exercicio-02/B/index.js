// Recebendo informações do personagem de ataque
const nameCharacterAttack = prompt('Informe o nome do personagem de ataque:');
const powerCharacterAttack = parseFloat(prompt(`Informe o poder de ataque de ${nameCharacterAttack}`));

// Recebendo informações do personagem de defesa
const characterDefense = prompt('Informe o nome do personagem de defesa:');
let lifeCharacterDefense = parseFloat(prompt(`Informe os pontos de vida de ${characterDefense}`));
const powerDefense = parseFloat(prompt(`Informe o poder de defesa de ${characterDefense}`));
const shield = confirm(`${characterDefense} possui um escudo?`);

// Realizando os cálculos
let damage = 0;
if (powerCharacterAttack > powerDefense && shield === false) {
    damage = powerCharacterAttack - powerDefense;
} else if (powerCharacterAttack > powerDefense && shield === true) {
    damage = (powerCharacterAttack - powerDefense) / 2;
} else if (powerCharacterAttack <= powerDefense) {
    damage = 0;
}
lifeCharacterDefense -= damage;

// Exibindo os resultados
alert(`Personagem de ataque: ${nameCharacterAttack}\nPoder de ataque: ${powerCharacterAttack}\nDano: ${damage}\n\nPersonagem de defesa: ${characterDefense}\nPontos de vida restantes: ${lifeCharacterDefense}\nPoder de defesa: ${powerDefense}\nPossui escudo: ${shield}`);
