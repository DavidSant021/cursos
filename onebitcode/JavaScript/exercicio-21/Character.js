class Character {
    constructor(name, lifePoints, attack, defense) {
        this.name = name
        this.lifePoints = lifePoints
        this.attack = attack
        this.defense = defense
    }

    attackCharacter(character) {
        const difference =  this.attack - character.defense
        character.lifePoints -= difference
    }
}

module.exports = Character