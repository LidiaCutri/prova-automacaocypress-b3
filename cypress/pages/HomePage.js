class HomePage{    
   
    acessarMenuAtendimento(){
       cy.get("#itemMenu_atendimento").click();
       cy.wait(1000);
    }

    acessarSubMenuCorreios(){
       cy.contains("Sistemas dos Correios").click();
       cy.wait(1000);
    }
}

export const homePage = new HomePage();