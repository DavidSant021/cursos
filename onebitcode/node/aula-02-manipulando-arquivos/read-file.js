const fs = require('node:fs');

const exists = fs.existsSync("arquivo.txt")

if (exists) {
    fs.readFile("arquivo.txt", "utf-8", (error, data) => {
        if (error) {
            console.log("Erro ao ler o arquivo assíncrono: " + error.message)
            return
        }
        console.log(data)
    })
} else {
    console.log("O arquivo não existe!")
}



// try {
//     const data = fs.readFileSync("./arquivo.txt", "utf-8")
//     console.log(data)
// } catch (error) {
//     console.log("Erro ao ler o arquivo: " + error.message)
// }