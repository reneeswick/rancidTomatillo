describe('Card container:', () => {

  it('User should see a display of cards', () => {
    cy.get('.CardContainer')
      .should('be.visible')
  });

  it('Should not display a movie if a user clicks outside of a poster', () => {
    cy.get('.page-title').click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/#/')
    })
  });
});
