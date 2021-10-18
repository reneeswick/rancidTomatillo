
//DO WE NEED THIS, miimics test on App_spec.js

describe('Card container:', () => {

  it('User should see a display of cards', () => {
    cy.get('.CardContainer')
      .should('be.visible')
  });

});
