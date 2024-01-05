class Account {
    #password
    #balance

    constructor(user) {
        this.email = user.email
        this.#password = user.password
        this.#balance = 0
    }

    getBalance(email, password) {
        if(this.#authenticate(email, password)) {
            return this.#balance
        } else {
            return null
        }
    }

    #authenticate(email, password) {
        return this.email === email && this.#password === password
    }
}

const user = {
    email: 'david@gmail.com',
    password: '12345678'
}

const userAccount = new Account(user);

console.log(userAccount);
console.log(userAccount.getBalance('david@gmail.com', '12345678'));
console.log(userAccount.getBalance('david@gmail.com', '00000000'))