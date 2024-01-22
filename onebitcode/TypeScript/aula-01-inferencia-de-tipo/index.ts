const spaceship = {
    name: 'X-Wing',
    speed: 0
}

function accelerate(spaceship: { name: string; speed: number }, speed: number) {
    spaceship.speed = speed
}

accelerate(spaceship, 50)