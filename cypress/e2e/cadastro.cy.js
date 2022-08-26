describe('Cadastro de usuários',() => {
    beforeEach(() => {
        cy.visit('/');
    })

    //Teste que verifica se as mensagens de validação de campos obrigatórios estão aparecendo corretamente.
    it('verifica mensagens de validação cadastro', ()=>{
        cy.contains('a', 'Cadastre-se para fazer entregas').click();
        cy.contains('.button-success', 'Cadastre-se para fazer entregas').click();
        //Dados
        cy.contains('.alert-error', 'É necessário informar o nome').should('be.visible');
        cy.contains('.alert-error', 'É necessário informar o CPF').should('be.visible');
        cy.contains('.alert-error', 'É necessário informar o email').should('be.visible');
        //Endereço
        cy.contains('.alert-error', 'É necessário informar o CEP').should('be.visible');
        cy.contains('.alert-error', 'É necessário informar o número do endereço').should('be.visible');
        //Método de entrega
        cy.contains('.alert-error', 'Selecione o método de entrega').should('be.visible');
        //Foto CNH
        cy.contains('.alert-error', 'Adicione uma foto da sua CNH').should('be.visible');
    })
})