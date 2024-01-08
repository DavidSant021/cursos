const Character = require('./Character')

class Mage extends Character {
    constructor(name, lifePoints, attack, defense, magicPoints) {
        super(name, lifePoints, attack, defense)
        this.magicPoints = magicPoints
    }

    attackCharacter(character) {
        const difference =  (this.attack + this.magicPoints) - character.defense
        character.lifePoints -= difference
    }

    heal(character) {
        character.lifePoints += this.magicPoints * 2
    }
}

module.exports = Mage