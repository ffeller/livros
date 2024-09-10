const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novoDado = { id:'3', nome: 'Novo livro' }
dadosAtuais.push(novoDado)
fs.writeFileSync("livros.json", JSON.stringify(dadosAtuais))

console.log()