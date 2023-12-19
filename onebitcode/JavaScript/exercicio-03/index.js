const value = parseFloat(prompt('Digite um valor em metros:'));
const option = prompt("Para qual unidade de medida deseja converter?" +
"\n1 - milímetros (mm)" +
"\n2 - centímetros (cm)" +
"\n3 - decímetros (dm)" +
"\n4 - decâmetros (dam)" +
"\n5 - hectômetro (hm)" +
"\n6 - quilômetro (km)")

//realizando as conversões
switch (option) {
    case '1':
        alert(`Em milímetros é ${value * 1000}`);
        break
    case '2':
        alert(`Em centímetros é ${value * 100}`);
        break
    case '3':
        alert(`Em decímetros é ${value * 10}`);
        break
    case '4':
        alert(`Em decâmetros é ${value / 10}`);
        break
    case '5':
        alert(`Em hectômetro é ${value / 100}`);
        break
    case '6':
        alert(`Em quilômetro é ${value / 1000}`);
        break
    default:
        alert('Opção inválida.')
}
