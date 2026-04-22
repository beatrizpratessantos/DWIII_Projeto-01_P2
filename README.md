## Link Validator CLI

Uma ferramenta para validar a conectividade de URLs, extraídas diretamente de links simples ou de arquivos Markdown.

---

## Funcionalidades

* **Validação em Tempo Real:** Verifica se os sites estão online usando requisições HTTP.
* **Extração Inteligente:** Identifica links dentro de arquivos de texto usando Regex.
* **Mensagens Amigáveis:** Traduz códigos técnicos (como 404 ou 500) para alertas claros em português.
* **Tratamento de Exceções:** Lida com erros de DNS e domínios inexistentes sem interromper a execução.

---

## Estrutura de Arquivos

O projeto segue o princípio de responsabilidade única através da modularização:

* **cli.js:** Ponto de entrada, captura comandos do usuário via terminal.
* **leitor.js:** Lógica de leitura de arquivos e extração de links.
* **httpValidacao.js:** Realiza a validação técnica e mapeia os status HTTP.

---
