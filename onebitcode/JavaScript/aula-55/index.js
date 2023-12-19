function addContact() {
    const contactSection = document.getElementById('contacts-list'); // Slecionei a area onde vai aparecer os contatos

    const h3 = document.createElement('h3'); // Criei o tag h3
    h3.innerText = 'Contato' // Dentro do h3 vai ficar escrito isto

    const ul = document.createElement('ul'); // Criei a tag ul, sera uma para cada contato

    const nameLi = document.createElement('li'); // Criei a li do nome
    nameLi.innerHTML = '<label for="name">Nome: </label>' // Criei uma label para a li do nome
    const nameInput = document.createElement('input'); // Criei o input do nome
    nameInput.type = 'text' // Declarei o tipo do input
    nameInput.name = 'fullname' // Declarei o nome do input
    nameInput.id = 'name' // Declarei o id do input
    nameLi.appendChild(nameInput); // Botei o input do nome dentro da li do nome
    ul.appendChild(nameLi); // Botei a li do nome dentro da ul
    ul.appendChild(document.createElement('br'));

    const phoneLi = document.createElement('li'); // Crei a li do telefone
    phoneLi.innerHTML = '<label for="phone">Telefone: </label>' // Criei a label para li do telefone
    const phoneInput = document.createElement('input'); // Crei o input do telefone
    phoneInput.type = 'tel' // Declarei o tipo do input
    phoneInput.name = 'phone' // Declarei o nome do input
    phoneInput.id = 'phone' // Declarei o id do input
    phoneLi.appendChild(phoneInput); // Botei o input de tel dentro do li do tel
    ul.appendChild(phoneLi); // Botei a li do tel dentro da ul
    ul.appendChild(document.createElement('br'));

    const addressLi = document.createElement('li'); // Criei a li do endereço
    addressLi.innerHTML = '<label for="address">Endereço: </label>' // Criei a label para li do endereço
    const addressInput = document.createElement('input'); // Criei o input do endereço
    addressInput.type = 'text' // Declarei o tipo do input
    addressInput.name = 'address' // Declarei o nome do input
    addressInput.id = 'address' // Declarei o id do input
    addressLi.appendChild(addressInput); // Botei o input de endereço dentro da li do endereço
    ul.appendChild(addressLi); // Botei a li do endereço dentro da ul
    ul.appendChild(document.createElement('br'));

    contactSection.append(h3, ul) // Adicionei o h3 e a ul dentro da area destinada
}

function removeContact() {
    const contactSection = document.getElementById('contacts-list');

    const titles = document.getElementsByTagName('h3');
    const contacts = document.getElementsByTagName('ul');

    contactSection.removeChild(titles[titles.length - 1]);
    contactSection.removeChild(contacts[contacts.length - 1]);
}