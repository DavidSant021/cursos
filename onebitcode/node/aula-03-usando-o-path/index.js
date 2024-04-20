const path = require("node:path");

// path.join(): Combina segmentos de caminho em um único caminho.
// path.resolve(): Resolve um caminho absoluto a partir de segmentos de caminho dados.
// path.basename(): Retorna o nome do arquivo ou diretório de um caminho.
// path.dirname(): Retorna o diretório pai de um caminho.
// path.extname(): Retorna a extensão do arquivo de um caminho.

const dir = "src"
const file = "app.js"

const fullPath =path.join(__dirname, dir, file)
console.log(fullPath)

const relativePath = "../arquivos/relatório.pdf"

const absolutePath = path.resolve(__dirname, relativePath)
console.log(absolutePath)

const fileName = path.basename(relativePath)
console.log(fileName)

const ext = path.extname(absolutePath)
console.log(ext)