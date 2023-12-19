function addInput() {
    const ul = document.getElementById('inputs'); // selecionei a ul da página

    const newLi = document.createElement('li'); // criei a tag <li>
    newLi.className = 'list-iten' // dei a classe para a li
    newLi.innerText = 'Novo input' // coloquei um texto dentro da li

    const newInput = document.createElement('input'); // criei a tag <input>
    newInput.type = 'text' // inseri o tipo do input
    newInput.name = 'input' // dei um nome pro input

    newLi.appendChild(newInput); // coloquei o input dentro do li
    ul.appendChild(newLi); // coloquei o li dentro da ul
}
