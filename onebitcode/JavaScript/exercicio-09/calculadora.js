function areaTriangulo(base=0, altura=0) {
    return base * altura / 2
}

function areaRetangulo(base=0, altura=0) {
    return base * altura
}

function areaQuadrado(lado=0) {
    return lado * lado
}

function areaTrapezio(baseUm=0, baseDois=0, altura=0) {
    return (baseUm + baseDois) * altura / 2
}

function areaCirculo(raio=0) {
    return (3.14 * raio * raio)
}

function exibirMenu() {
    return prompt(`Calculadora Geométrica:\n\n1 - Área do Triângulo\n2 - Área do Retângulo\n3 - Área do Quadrado\n4 - Área do Trapézio\n5 - Área do Círculo\n6 - Sair`);
}

function executar() {
    let opcao = '';

    do {
        opcao = exibirMenu();
    
        switch(opcao) {
            case '1':
                const base1 = parseFloat(prompt('Base:'));
                const altura1 = parseFloat(prompt('Altura:'));
                alert(`A área é de: ${areaTriangulo(base1, altura1)}`);
                break
            case '2':
                const base2 = parseFloat(prompt('Base:'));
                const altura2 = parseFloat(prompt('Altura:'));
                alert(`A área é de: ${areaRetangulo(base2, altura2)}`);
                break
            case '3':
                const lado = parseFloat(prompt('Lado:'));
                alert(`A área é de: ${areaQuadrado(lado)}`);
                break
            case '4':
                const baseMaior = parseFloat(prompt('Base maior:'));
                const baseMenor = parseFloat(prompt('Base menor:'));
                const altura3 = parseFloat(prompt('Altura:'));
                alert(`A área é de: ${areaTrapezio(baseMaior, baseMenor, altura3)}`);
                break
            case '5':
                const raio = parseFloat(prompt('Raio:'));
                alert(`A área é de: ${areaCirculo(raio)}`);
                break
            case '6':
                alert('Finalizando...');
                break
            default:
                alert('Opção inválida! Tente Novamente.');
                break
            }
    } while(opcao !== '6');
}

executar();