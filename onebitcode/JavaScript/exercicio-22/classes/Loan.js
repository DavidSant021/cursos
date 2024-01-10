const Installments = require("./Installment")

module.exports = class Loan {
    static #fee = 1.05

    constructor(value, installments) {
        this.value = value
        this.installments = []
        for (let i = 1; i <= installments; i++) {
            this.installments.push(new Installments((value * Loan.#fee) / installments, i))
        }
        this.createdAt = new Date()
    }

    static get fee() {
        return Loan.#fee
    }

    static set fee(newFeePercentage) {
        Loan.#fee = 1 + (newFeePercentage / 100)
    }
}