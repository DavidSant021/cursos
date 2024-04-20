import fs from 'node:fs'
import { text } from 'stream/consumers'

export function createFile(text) {
    return new Promise((resolve, reject) => {
        fs.writeFile("meuarquivo.txt", text, "utf-8", (error) => {
            if (error) {
                reject("Erro ao escrever arquivo: ", error.message)
            } else {
                resolve()
            }
        })
    })
}

export function updateFile(newText) {
    return new Promise((resolve, reject) => {
        fs.writeFile("meuarquivo.txt", newText, "utf-8", (error) => {
            if (error) {
                reject("Erro ao modificar arquivo: ", error.message)
            } else {
                resolve()
            }
        })
    })
}

export function showFile() {
    return new Promise((resolve, reject) => {
        fs.readFile("meuarquivo.txt", "utf-8", (error, data) => {
            if (error) {
                reject("Erro ao ler arquivo: ", error.message)
            } else {
                console.log(data)
                resolve()
            }
        })
    })
}

export function deleteFile() {
    return new Promise((resolve) => {
        fs.unlink("meuarquivo.txt", (error) => {
            if (error) {
                console.log("Erro ao excluir o arquivo: ", error.message)
                resolve()
            } else {
                console.log("Arquivo excluído com sucesso!")
                resolve()
            }
        })
    })
}