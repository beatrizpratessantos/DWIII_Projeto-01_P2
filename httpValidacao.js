const fetch = require('node-fetch');
const chalk = require('chalk');

function manejaErros(erro) {
    if (erro.code === 'NOTFOUND') {
        return chalk.red('Domínio inexistente ou erro de rede.');
    }
    return chalk.red('Ocorreu um erro inesperado.');
}

function traduzStatus(status) {
    switch (status) {
        case 200:
            return chalk.green('Site no ar e operando.');
        case 400:
        case 404:
            return chalk.red('Página não encontrada.');
        case 500:
            return chalk.yellow('Erro interno no servidor do site.');
        default:
            return `Status: ${status}`;
    }
}

async function validaStatus(listaURLs) {
    const resultados = await Promise.all(
        listaURLs.map(async (url) => {
            try {
                const response = await fetch(url);
                return `${url} -> ${traduzStatus(response.status)}`;
            } catch (erro) {
                return `${url} -> ${manejaErros(erro)}`;
            }
        })
    );
    return resultados;
}

module.exports = validaStatus;
