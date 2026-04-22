const fs = require('fs').promises;

function extraiLinks(texto) {
    const regex = /\[\[?([^\]]+)\]?\]\((https?:\/\/[^\s$.?#].[^\s]*)\)|(https?:\/\/[^\s$.?#].[^\s]*)/gm;
    const matches = [...texto.matchAll(regex)];
    return matches.map(match => match[2] || match[3]);
}

async function pegaArquivo(caminho) {
    try {
        if (caminho.startsWith('http')) return [caminho];

        const texto = await fs.readFile(caminho, 'utf-8');
        const links = extraiLinks(texto);
        
        if (links.length === 0) throw new Error('Nenhum link encontrado no arquivo.');
        return links;
    } catch (erro) {
        if (erro.code === 'ENOENT') throw new Error('Arquivo não encontrado no diretório.');
        throw erro;
    }
}

module.exports = pegaArquivo;