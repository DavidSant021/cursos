const Character = require('./Character')

class Thief extends Character {
    attackCharacter(character) {
        const difference = (this.attack - character.defense) * 2
        character.lifePoints -= difference
    }
}

module.exports = Thief