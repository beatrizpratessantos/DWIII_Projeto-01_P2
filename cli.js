const chalk = require('chalk');
const pegaArquivo = require('./leitor.js');
const validaStatus = require('./httpValidacao.js');

const caminho = process.argv[2];

async function processaTexto(caminhoDoArquivo) {
    if (!caminhoDoArquivo) {
        console.log(chalk.blue('Uso: node cli.js <url_ou_caminho_arquivo>'));
        return;
    }

    try {
        console.log(chalk.cyan('Iniciando validação'));
        const links = await pegaArquivo(caminhoDoArquivo);
        const resultado = await validaStatus(links);
        
        console.log(chalk.white.bold('\n--- Relatório Final ---'));
        resultado.forEach(item => console.log(item));
        
    } catch (erro) {
        console.error(chalk.bgRed.white(' ERRO '), erro.message);
    }
}

processaTexto(caminho);