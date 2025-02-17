const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um nome: ", (name) => {
    fs.readFile('nomes.csv', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            rl.close();
        }
        const names = data.split('\n').map(name => name.trim());
        if(names.includes(name)) {
            console.log(`O nome ${name} já existe.`);
        } else {
            console.log(`O nome ${name} não existe.`);
        }
        rl.close();
    });
});