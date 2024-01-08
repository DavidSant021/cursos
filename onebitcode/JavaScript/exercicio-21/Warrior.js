const Character = require('./Character')

class Warrior extends Character {
    constructor(name, lifePoints, attack, defense, shieldPoints) {
        super(name, lifePoints, attack, defense)
        this.shieldPoints = shieldPoints
        this.position = 'attack'
    }

    attackCharacter(character) {
        if(this.position === 'attack') {
            super.attackCharacter(character)
        }
    }

    changePosition() {
        if(this.position === 'attack') {
            this.position = 'defense'
            this.defense += this.shieldPoints
        } else {
            this.position = 'attack'
            this.defense -= this.shieldPoints
        }
    }
}

module.exports = Warrior