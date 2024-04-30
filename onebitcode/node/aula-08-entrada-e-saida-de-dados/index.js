const process = require("node:process");

process.stdin.on('data', (keyboard) => {
    process.stdout.write(`Texto do usuário: ${keyboard}`);
    process.exit();
})