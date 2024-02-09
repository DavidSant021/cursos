// getDate retorna o dia
// getDay retorna o dia da semana
// getMonth retorna o mes de 0 a 11
// getFullyear retona o ano em 4 digitos
// getHours retorna a hora no meu fuso horário
// getMinutes retorna os minutos
// getSeconds retorna os segundos
// getMilliseconds restorna os milisegundos

const data = new Date()
const dia = data.getDate()
const diaSemana = data.getDay()
const mes = data.getMonth()
const ano = data.getFullYear()
const hora = data.getHours()
const minutos = data.getMinutes()

let nomeDia = ''

switch (diaSemana) {
    case 0:
        nomeDia = 'domingo'
        break;
    case 1: 
        nomeDia = 'segunda-feira'
        break;
    case 2:
        nomeDia =  'terça-feira'
        break;
    case 3:
        nomeDia = 'quarta-feira'
        break;
    case 4:
        nomeDia = 'quinta-feira'
        break;
    case 5:
        nomeDia = 'sexta-feira'
        break;
    case 6: 
        nomeDia = 'sábado'
        break
    default:
        break;
}

let nomeMes = ''

switch (mes) {
    case 0:
        nomeMes = 'Janeiro'
        break;
    case 1: 
        nomeMes = 'Fevereiro'
        break;
    case 2:
        nomeMes =  'Março'
        break;
    case 3:
        nomeMes = 'Abril'
        break;
    case 4:
        nomeMes = 'Maio'
        break;
    case 5:
        nomeMes = 'Junho'
        break;
    case 6: 
        nomeMes = 'Julho'
        break
    case 7:
        nomeMes = 'Agosto'
        break;
    case 8:
        nomeMes = 'Setembro'
        break;
    case 9:
        nomeMes = 'Outubro'
        break;
    case 10:
        nomeMes = 'Novembro'
        break;
    case 11: 
        nomeMes ='Dezembro'
        break;
    default:
        break;
}

const span = document.getElementById('text-content')
span.innerText = `${nomeDia}, ${dia} de ${nomeMes} de ${ano}
${hora}:${minutos}`