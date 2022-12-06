Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
  cy.get('#firstName').type('Ana Carolina')
  cy.get('#lastName').type('Carvalho')
  cy.get('#email').type('carolccarvalho@gmail.com')
  cy.get('#open-text-area').type('Teste')
  cy.contains('button', 'Enviar').click()
})