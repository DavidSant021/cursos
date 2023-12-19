function register(element) {
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert(`Usuário ${username} registrado!`);
        element.children.username.value = ''
        element.children.password.value = ''
        element.children.passwordConfirmation.value = ''
    } else {
        alert('As senhas não conferem');
    }
}
