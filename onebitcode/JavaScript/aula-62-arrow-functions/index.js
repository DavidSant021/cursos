function normalSum(a, b) {
    return a + b
}

console.log(`A soma normal é ${normalSum(2, 2)}`)

const anonymousSum = function(a, b) {
    return a + b
}

console.log(`A soma anônima é ${anonymousSum(2, 2)}`)

const arrowSum = (a, b) => {
    return a + b
}

console.log(`A soma arrow function é ${arrowSum(2, 2)}`)

const subtract = (a, b) => a - b

console.log(`Subtração é ${subtract(5, 2)}`)

const double = n => `O dobro de ${n} é ${n * 2}`

const number = 21

console.log(double(number))

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithp = towns.filter(town => town[0] === 'P')

console.log(startingWithp)