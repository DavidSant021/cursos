const fs = require('node:fs');

fs.rename("arquivo.csv", "arquivo.txt", (error) => {
    if (error) {
        console.log("Erro ao renomear o arquivo: " + error.message);
        return
    }
    console.log("Arquivo renomeado com sucesso!");
})