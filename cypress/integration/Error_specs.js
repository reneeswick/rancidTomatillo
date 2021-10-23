describe('Error handling', () => {
  it('Should display an error page if an individual tries to type an invalid URL', () => {
    cy.visit('http://localhost:3000/#/1234');
    cy.location().should((loc) => {
      expect(loc.hash).to.eq('#/Error')
      expect(loc.href).to.eq('http://localhost:3000/#/Error')
    })
  })
});
