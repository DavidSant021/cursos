class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, password) {
        if (email === this.email && password === this.password) {
            console.log('Login bem-sucedido!');
        } else {
            console.log('Email ou senha inválidos. Falha no login.');
        }
    }
}

const david = new User('David Santiago', 'david@gmail.com', 12345678)
console.log(david)
david.login('david@gmail.com', 12345678)