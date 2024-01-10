module.exports = class Installments {
    constructor(value, number) {
        this.value = value
        this.number = number
        this.status = 'pending'
    }
}