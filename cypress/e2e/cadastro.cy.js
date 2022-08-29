describe('Cadastro de usuários',() => {
    beforeEach(() => {
        cy.visit('/');
    })

    //Teste para verificar funcionalidade do botão que irá mostrar tela de cadastro.
    it('verifica botão para página de cadastro', ()=>{
        cy.contains('a', 'Cadastre-se para fazer entregas').click();
        cy.contains('h1', 'Cadastre-se para fazer entregas').should('be.visible');
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

    //Teste para verificar mensagem de alerta do campo CPF preenchido incorretamente.
    it('verifica mensagem de alerta do campo CPF preenchido incorretamente', ()=>{
        cy.contains('a', 'Cadastre-se para fazer entregas').click();
        cy.get('input[name="cpf"]').type('123456789');
        cy.contains('.button-success', 'Cadastre-se para fazer entregas').click();
        cy.contains('.alert-error', 'Oops! CPF inválido').should('be.visible');
    })
    
    //Teste para verificar mensagem de alerta do campo email preenchido incorretamente.
    it('verifica mensagem de alerta do campo Email preenchido incorretamente', ()=>{
        cy.contains('a', 'Cadastre-se para fazer entregas').click();
        cy.get('input[name="email"]').type('jao@tste');
        cy.contains('.button-success', 'Cadastre-se para fazer entregas').click();
        cy.contains('.alert-error', 'Oops! Email com formato inválido.').should('be.visible');
    })

    //Teste para verificar mensagem de alerta do campo Whatsapp preenchido incorretamente.
    it('verifica mensagem de alerta do campo Whatsapp preenchido incorretamente', ()=>{
        cy.contains('a', 'Cadastre-se para fazer entregas').click();
        cy.get('input[name="whatsapp"]').type('123');
        cy.contains('.button-success', 'Cadastre-se para fazer entregas').click();
        cy.contains('.alert-error', 'Oops! Whatsapp com formato incorreto').should('be.visible');
    })

   //Teste para verificar mensagem de alerta do campo CEP preenchido incorretamente.
    it('verifica mensagem de alerta do campo CEP preenchido incorretamente', ()=>{
        cy.contains('a', 'Cadastre-se para fazer entregas').click();
        cy.get('input[name="postalcode"]').type('85');
        cy.get('input[value="Buscar CEP"]').click();
        cy.contains('.alert-error', 'Informe um CEP válido').should('be.visible');
    })

    //Teste para verificar mensagem de alerta quando mais de um método de entrega foi selecionado.
    it('verifica se mais de um método de entrega foi selecionado', ()=>{
        cy.contains('a', 'Cadastre-se para fazer entregas').click();
        cy.contains('span', 'Moto').click();
        cy.contains('span', 'Bicicleta').click();
        cy.contains('.button-success', 'Cadastre-se para fazer entregas').click();
        cy.contains('.alert-error', 'Oops! Selecione apenas um método de entrega').should('be.visible');
    })

    //Teste para cadastrar usuário válido.
    it('cadastrar um usuário válido', ()=>{
        cy.contains('a', 'Cadastre-se para fazer entregas').click();
        cy.get('input[name="name"]').type('João');
        cy.get('input[name="cpf"]').type('12345678910');
        cy.get('input[name="email"]').type('jao@teste.com');
        cy.get('input[name="whatsapp"]').type('42 99999999');
        cy.get('input[name="postalcode"]').type('85010330');
        cy.get('input[value="Buscar CEP"]').click();
        cy.get('input[name="address-number"]').type('10');
        cy.contains('span', 'Van/Carro').click();
        cy.get('input[type="file"]').attachFile('vader.png');
        cy.contains('.button-success', 'Cadastre-se para fazer entregas').click();
        cy.get('.swal2-popup').should('be.visible');
        cy.contains('.swal2-confirm', 'Fechar').click();
    })

    //Teste para cadastrar usuário válido.
    it('verifica botão para voltar para home', ()=>{
        cy.contains('a', 'Cadastre-se para fazer entregas').click();
        cy.contains('a', 'Voltar para home').click();
        cy.contains('a', 'Cadastre-se para fazer entregas').should('be.visible');
    })
})