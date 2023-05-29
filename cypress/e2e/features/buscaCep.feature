Feature: Busca CEP e código de rastreamento 

    Feature com suite de testes para validar busca de CEP no site dos correios

Background: Acessar o site do correios e menu Sistema dos correios
   Given que o usuário acesse a página dos correios
   And o usuário acessar o menu "Atendimento"
   And clicar na opção "Sistema dos Correios"    
    
Scenario: CT001 - Busca por CEP inválido
    And o usuário acessar o card "Busca CEP"
    When o usuário pesquisar pelo CEP "cepinvalido"
    Then o endereço não é localizado e é exibido a mensagem "Dados não encontrado"

Scenario: CT002 - Busca por CEP válido
    And o usuário acessar o card "Busca CEP"
    When o usuário pesquisar pelo CEP "cepvalido"
    Then o endereço "Rua Quinze de Novembro - lado ímpar" localidade/UF "São Paulo/SP" é exibido

Scenario: CT003 - Busca por código de rastreamento inválido
    And o usuário acessar o card "Rastreamento"
    When o usuário pesquisar pelo código de rastreamento "SS987654321BR"
    Then o sistema possui a ferramenta anti-robô no qual impede a automação deste step


