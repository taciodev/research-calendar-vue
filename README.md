# Research Calendar Vue

Este é um projeto de aplicação SPA (Single Page Application) desenvolvido em Vue.js que consome a API pública do IBGE para exibir o calendário de divulgação de pesquisas de forma eficiente e amigável ao usuário.

## Tecnologias Utilizadas

- **Vue.js:** Um framework progressivo para a construção de interfaces de usuário. Vue.js facilita a criação de aplicativos interativos e reativos.
- **axios:** Um cliente HTTP baseado em Promises para realizar requisições HTTP. Utilizamos o axios para fazer requisições à API do IBGE e obter os dados do calendário de divulgação de pesquisas.

## Instalação do Projeto

1. Clone o repositório do GitHub:

```bash
git clone <URL_do_repositório>
```

2. Navegue até o diretório do projeto:

```bash
cd research-calendar-vue
```

3. Instale as dependências do projeto utilizando npm:

```bash
npm install
```

## Execução do Projeto

Após a instalação das dependências, você pode executar a aplicação em diferentes modos:

### Modo Desenvolvimento

```bash
npm run serve
```

Isso iniciará um servidor de desenvolvimento e abrirá a aplicação em seu navegador padrão. Qualquer alteração nos arquivos será refletida automaticamente na página.

### Modo Produção

```bash
npm run build
```

Este comando compilará os arquivos para a pasta `dist/`. Você pode então implantar esses arquivos em um servidor web para disponibilizar sua aplicação ao público.

## Outros Comandos

Além dos comandos de execução, há também alguns outros comandos úteis disponíveis:

### Lint

Para executar o lint nos arquivos do projeto e corrigir eventuais problemas.

```bash
npm run lint
```

### Personalização da Configuração

Para personalizar a configuração do projeto, consulte a [Referência de Configuração](https://cli.vuejs.org/config/).
