// Tipo literal
// Ele é literalmente o valor que atribuimos
// Não pode receber nenhum outro valor

let literal: "Hello, World!"
let pi: 3.14159


// Union types

let option: "Yes" | "No" | "Maybe" //Pode ser do tipo literal 'yes', 'no' ou 'maybe'

option = "No"

// Alias

// Uma forma ainda mais flexível de usar os tipos é criando um Alias
// Um Alias é definido usando a palavra type e existe uma convenção de se utilizar PascalCase
type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

// Um Alias é um nome personalizado para um tipo e pode ser atribuido a outras variáveis
let homePlanet: Planet
homePlanet = "Terra"

function checkPlanet(planet: Planet) {
    if (planet === "Terra") {
      console.log("Estamos na Terra")
    }
}

type GreetingCallback = (name: string) => void

function greet(callbackFn: GreetingCallback) {
    let name = 'David'

    callbackFn(name)
}