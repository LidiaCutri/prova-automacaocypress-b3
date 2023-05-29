import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import {homePage} from '@pages/HomePage';
import {sistemaCorreios} from '@pages/SistemaCorreios';
import {enderecoPage} from '@pages/EnderecoPage';
import {rastreamento} from '@pages/Rastreamento';

Given("o usuário acessar o menu {string}", function (string) {
  if (string === "Atendimento"){
    homePage.acessarMenuAtendimento();
  }
});

  Given("clicar na opção {string}", function (string) {
    if (string === "Sistema dos Correios"){
      homePage.acessarSubMenuCorreios();
    }
  });

  Given("o usuário acessar o card {string}", function (string) {
    if (string === "Busca CEP"){
      sistemaCorreios.acessarBuscaCep();
    } else if (string === "Rastreamento"){
      sistemaCorreios.acessarRastreamento();
    }
  });

  When("o usuário pesquisar pelo CEP {string}", function (string) {
    enderecoPage.pesquisarCep(string);
  });

  Then("o endereço não é localizado e é exibido a mensagem {string}", function (string) {
    enderecoPage.msgAlerta().should("have.text", string);
  });

  Then("o endereço {string} localidade\\/UF {string} é exibido", function (endereco, localidade) {
    enderecoPage.retornoEndereco().should("have.text", endereco);
    enderecoPage.retornoLocalidade().should("have.text", localidade);
  });

  When("o usuário pesquisar pelo código de rastreamento {string}", function (string) {
    rastreamento.pesquisaCodigo(string);
  });

  Then("o sistema possui a ferramenta anti-robô no qual impede a automação deste step", function () {
    rastreamento.captchaImg().should("be.visible");
  });

 