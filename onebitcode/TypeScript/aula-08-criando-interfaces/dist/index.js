// Uma Interface é outra maneira de
// declarar um tipo para um objeto,
// portanto funciona de forma semelhante
let sun = {
    name: 'Sol',
    mass: 1.989 * (Math.pow(10, 30)),
    age: 4.603 * (Math.pow(10, 9)),
    planets: []
};
// Classes podem implementar interfaces
// Nesse caso ela cria o que chamamos de contrato,
// pois obriga a classe a implementar tudo o que
// foi definido na interface
class MilkWayPlanet {
    constructor(name, mass, population) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }
    createSatellite(name) {
        //...
    }
}
// O mesmo é válido para implementação usando um Type de objeto
class BigAsteroid {
    constructor(name, mass, size) {
        this.name = name;
        this.mass = mass;
        this.size = size;
    }
}
let earth = {
    name: "Terra",
    mass: 5.972 * Math.pow(10, 24),
    population: 8000000000,
    createSatellite: (name) => {
        // ...
    },
    orbitedStar: sun
};
// O mesmo não é possível com Types
