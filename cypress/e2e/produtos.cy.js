/// <reference types="cypress" />

describe('Funcionalidade Pagina de aprodutos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto na lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(5)
            .contains('Aero Daily Fitness Tee')
            .click()
    });

    it.only('Deve adicionar o produto no carrinho', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .contains('Arcadio Gym Short').click()
        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Arcadio Gym Short” foram adicionados no seu carrinho.')





    });

});

