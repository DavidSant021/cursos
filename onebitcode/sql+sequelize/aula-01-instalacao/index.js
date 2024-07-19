(async () => {
    const Planet = require('./models/Planet')

    const newPlanet = await Planet.create({
        name: 'Terra',
        position: 3
    })

    console.log(newPlanet)
})();