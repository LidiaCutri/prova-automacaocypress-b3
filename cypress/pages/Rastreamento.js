class Rastreamento{

    pesquisaCodigo(codigo){
        cy.get("#objeto").type(codigo); 
        cy.get("#b-pesquisar").click();
    }

    captchaImg(){
        return cy.get("#captcha_image");
    }
}

export const rastreamento = new Rastreamento();