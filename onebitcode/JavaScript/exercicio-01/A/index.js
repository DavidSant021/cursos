const nome = window.prompt('Seu primeiro nome:');
const sobrenome = window.prompt('Seu sobrenome:');
const campoDeEstudo = window.prompt('Campo de estudo:');
const nascimento = window.prompt('Ano de nascimento:');
const idade = 2023 - parseInt(nascimento);
window.alert(` Nome completo: ${nome} ${sobrenome}\n Campo de estudo: ${campoDeEstudo}\n Idade: ${idade} anos.`);
