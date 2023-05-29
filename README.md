# Testes automatizados em BDD com Cypress

## Instalação e configuração do projeto

- Criar pasta do projeto local na máquina;
- Acessar o prompt de comando na pasta criada e criar o arquivo package.json (npm init -y);
- Instalar o Cypress (npm install cypress --save-dev);
- Acesse o VScode e abra a pasta do projeto criado;
- Rode o Cypress (npx cypress open) - Assim que o cypress por iniciado será criado a estrutura de pastas;
- Instalar a dependência: Esbuild (npm install esbuild @bahmutov/cypress-esbuild-preprocessor --save-dev);
- Instalar a dependência: Cucumber (npm install @badeball/cypress-cucumber-preprocessor --save-dev);
- Instalar a dependência: Allure (npm install @shelex/cypress-allure-plugin --save-dev);
- Configurar o arquivo cypress.config.js: 
  `const { defineConfig } = require("cypress");`
  `const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");`
  `const preprocessor = require("@badeball/cypress-cucumber-preprocessor");`
  `const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");`
  `const allureWriter = require("@shelex/cypress-allure-plugin/writer");`

`async function setupNodeEvents(on, config) {`
  `// This is required for the preprocessor to be able to generate JSON reports after each run, and more,`
  `await preprocessor.addCucumberPreprocessorPlugin(on, config);`

  `on(`
    `"file:preprocessor",`
    `createBundler({`
      `plugins: [createEsbuildPlugin.default(config)],`
    `})`
  `);`
  `allureWriter(on, config);`

  `// Make sure to return the config object as it might have been modified by the plugin.`
  `return config;`
`}`

`module.exports = defineConfig({`
  `e2e: {`
    `setupNodeEvents,`
    `specPattern: "cypress/e2e/features/*.feature",`
    `baseUrl: "https://seubarriga.wcaquino.me/login",`
    `chromeWebSecurity: false,`
    `env: {`
      `allureReuseAfterSpec: true,`
    `},`
  `},`
`});`

- No VsCode, dentro da pasta Cypres, criar a subpasta "e2e";

- Dentro da subpasta e2e, criar as subpastas "features" e "step_definitions";

- Dentro da pasta Cypress criar a subpasta "pages";

- Criar um arquivo com o nome ".cypress-cucumber-preprocessorrc.json" na raíz do projeto para configurar o filepath dos stepDefinitons:

  `{`

    `"json":{`

  ​    `"enabled": false,`

  ​    `"output": "jsonreport/test.json"`

    `},`

    `"stepDefinitions":[`

  ​    `"[filepath]/**/*.{js,ts}",`

  ​    `"[filepath].{js,ts}",`

  ​    `"cypress/e2e/step_definitions/*.{js,ts}"`       

    `]`

  `}`

- Criar um arquivo com o nome "jsconfig.json" na raíz do projeto para configurar a filepath de pages:

  `{`
      `"compilerOptions": {`
          `"baseUrl": ".",`
          `"paths": {`
              `"@pages/*": [
                  "./cypress/pages/*"`
              `]`
          `}`
      `}`
  `}`

  

## Comandos

- npx cypress open (rodar os testes com interface gráfica);
- npx cypress run (rodas os testes em modo headless)

