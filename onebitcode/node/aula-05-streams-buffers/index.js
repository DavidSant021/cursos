const fs = require("node:fs");

// const streamLeitura = fs.createReadStream("arquivo.txt");
const streamLeitura = fs.createReadStream("wallpaper.jpg");
const buffer = []

streamLeitura.on("data", (chunk) => {
    buffer.push(chunk)
    console.log("Um chunk foi processado.")
})

streamLeitura.on("end", () => {
    console.log("Buffer:\n", buffer)
    // const dadosCompletos = Buffer.concat(buffer).toString()
    // console.log("Dados Lidos:\n", dadosCompletos)
})