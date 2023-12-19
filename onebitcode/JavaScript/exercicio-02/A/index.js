const carOne = window.prompt('Informe o modelo do primeiro veiculo:');
const speedOne = parseFloat(window.prompt('Informe a velocidade do primeiro veiculo:'));
const cartwo = window.prompt('Informe o modelo do segundo veiculo:');
const speedTwo = parseFloat(window.prompt('Informe a velocidade do segundo veiculo:'));

if (speedOne > speedTwo) {
    alert(`O veiculo ${carOne} é o mais rápido.`)
} else if (speedTwo > speedOne) {
    alert(`O veiculo ${cartwo} é o mais rápido.`)
} else {
    alert('A velocidade dos veiculos são iguais.')
}
