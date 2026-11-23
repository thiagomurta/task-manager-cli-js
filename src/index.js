import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
// import { subtract } from "./app.js";

// console.log(subtract(33, 18))

const filePath = path.join(fileURLToPath(import.meta.url), '../../data/tasks.json')
console.log(filePath)
console.log(fileURLToPath(import.meta.url))

// const content = await readFile(
//     filePath,
//     "utf-8"
// );

// console.log(content)
let list_content = []

const dados = {
    nome: "Thiago",
    idade: 23,
    email: 'thiago@email.com'
};
list_content.push(dados)

await writeFile(
    filePath,
    JSON.stringify(list_content),
    "utf-8",
);

const content = await readFile(
    filePath,
    "utf-8"
);
console.log(content)

const dados2 = {
    nome: "Maria",
    idade: 21,
    email: 'maria@email.com'
};

list_content.push(dados2)

await writeFile(
    filePath,
    JSON.stringify(list_content),
    "utf-8",
);

const content2 = await readFile(
    filePath,
    "utf-8"
);

console.log(content2)


// JSON.stringify(dados) -> transforma objeto JS em formato JSON
// JSON.parse(dados) -> transforma formato JSON em objeto JS

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });