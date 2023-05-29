class SistemaCorreios{
    
    acessarBuscaCep(){
       cy.get("a[href='https://buscacepinter.correios.com.br/app/endereco/index.php?t']").invoke('removeAttr', 'target').click(); //seletor XPATH
    }

    acessarRastreamento(){
        cy.get("a[href='https://rastreamento.correios.com.br/app/index.php']").invoke('removeAttr', 'target').click();
    }
}

export const sistemaCorreios = new SistemaCorreios();