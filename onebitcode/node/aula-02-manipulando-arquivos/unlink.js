const fs = require('node:fs');

fs.unlink("arquivo.txt", (error) => {
    if (error) {
        console.log("Erro ao excluir o arquivo: ", error.message);
        return
    }
    console.log("Arquivo excluido com sucesso!");
})