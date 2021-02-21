describe("MVP Tests", function () {
    it("Tests if one can type their name in the name field", function (){
        cy.visit('http://localhost:3000/')
        cy.get('.pizza-button').click()

        cy.url()
        .should('include', '/pizza')

        cy.get('input[name=name]')
        .type('Sarah Lee')
        .should('have.value', 'Sarah Lee')

    });
    it("Check if one can select multiple toppings", function(){
        cy.visit('http://localhost:3000/')
        cy.get('.pizza-button').click()

        cy.get('[type="checkbox"]').check()
        .should('be.checked')
    })
    it("Test if one can submit the form", function(){
        cy.visit('http://localhost:3000/')
        cy.get('.pizza-button').click()
        cy.intercept('POST', 'https://reqres.in/api/users', {
  statusCode: 200,
  body: 'it worked!'
})
cy.get('form').submit();

       
    })

})

