// FLAGS
    // g - global (encontra todas as ocorrências)
    // i  - insensiteve (não faz diferênça entre maiúsculo ou minúsculo)
    // () grupos
    // | ou


const { texto } = require('./base');

const regExp1 = /(maria|joao|luiz)(, hoje sua esposa)/;
const found = regExp1.exec(texto);

if (found) {
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
}


