const readline = require("node:readline");

function showInterface() {
    console.log("---------------------")
    console.log("GERENCIADOR DE ANOTAÇÕES")
    console.log("---------------------\n")

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    const question = `Informe uma das opções:\n\n1 - Criar anotação\n2 - Listar arquivos salvos\n3 - Ler uma anotação\n4 - Excluir uma anotação`
    rl.question(question, )
}