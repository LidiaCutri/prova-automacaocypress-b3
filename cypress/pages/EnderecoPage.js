class EnderecoPage{
  
    pesquisarCep(cep){
        if (cep === "cepinvalido"){
            cy.fixture('cep').then((cepjson) => {
                cy.get("#endereco").type(cepjson.cepinvalido)
            })
        } else if (cep === "cepvalido"){
            cy.fixture('cep').then((cepjson) => {
                cy.get("#endereco").type(cepjson.cepvalido)
            })
        }
        cy.get("#btn_pesquisar").click();
    }

    msgAlerta(){
        return cy.get("#mensagem-resultado-alerta"); //seletor por id
    }

    retornoEndereco(){
        return cy.get("td[data-th='Logradouro/Nome']"); //seletor CSS
    }

    retornoLocalidade(){
        return cy.get("td[data-th='Localidade/UF']");
    }
}

export const enderecoPage = new EnderecoPage();