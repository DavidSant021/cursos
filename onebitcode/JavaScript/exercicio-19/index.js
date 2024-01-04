const Author = require("./Author");

const john = new Author('John Doe');

const post = john.writePost('Titulo do Post', 'Lorem ipsun dolor sic...');

post.addComment('David', 'Muito bom!');
post.addComment('Ester', 'Legal!');

console.log(john);
console.log(post);