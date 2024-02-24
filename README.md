# React + Cypress

Este é um projeto de teste de ponta a ponta (E2E) desenvolvido com React e Cypress. O objetivo é garantir a funcionalidade e a integridade do aplicativo em diferentes cenários de uso, simulando interações do usuário em todo o fluxo da aplicação. O Cypress é utilizado para automatizar os testes, proporcionando uma maneira eficaz de identificar e corrigir possíveis problemas. Este projeto demonstra as práticas recomendadas para testes E2E em aplicações React, ajudando a garantir a qualidade e confiabilidade do software.

## Instalação e configuração

Depois de clonar o projeto, execute os seguintes comandos no terminal:

- Instale as dependências do projeto:

```bash
pnpm install
```

- Execute o cypress: 

```bash
pnpm cypress:open
```

Uma janela do cypress será aberta:
  1. nessa janela seleciona a opção `E2E Testing`
  2. depois seleciona o browser em que a suite de testes será executada
  3. clique em Start E2E Testing in `<browser selecionado>`

Isto feito, será aberta uma nova janela do browser selecionado. Vá até a aba **Specs** e selecione o teste que deseja executar.

## Criando novos testes

Para escrever novos casos de teste, vá na raiz do projeto e localize o diretório `cypress/e2e` e crie um arquivo seguindo o padrão `nomeDoFluxoTestado.cy.ts`.

Dentro do arquivo a estrutura deve ser a seguinte:

```ts
describe("Descrição simples do fluxo geral que será testado [escopo geral]", () => {
  it("descrição do caso de uso [escopo específico]", () => {
    // código do teste
  });
});
```
No `describe` devemos descrever o macro-fluxo.
No `it` devemos descrever os micro-fluxos (aqui devemos cobrir as ramificações do macro-fluxo, happy paths e fail cases).


## Troubleshooting

Se ao executar o comando `pnpm cypress:open` for retornado o erro de que o cypress não está instalado, execute:

```bash
pnpm cypress install
```

## Contato

Jonathan Assunção | almeida_jn@hotmail.com