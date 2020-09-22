describe('Buscar Pila en ebay y inprimir en el log la cantidad de registros encontrados en el log',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test because of uncaught exception in the application
        return false
      })
it('Buscar Pila en ebay',()=>{
    cy.visit('https://www.ebay.com/')
    cy.get('#gh-ac').should('exist').type('pila')
    cy.get('.btn.btn-prim.gh-spr').should('exist').click()  
    cy.get('.srp-controls__count-heading > :nth-child(1)').should('exist').then(($cantPilas)=>{
            var cantPilas = $cantPilas.text();
            cy.log('Cantidad de resultados encontrados ' + cantPilas)
    })

})

})