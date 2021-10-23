beforeEach(() => {
  cy.visit('http://localhost:3000');
});

describe('App main display', () => {
  it('Should confirm true is equal to true', () => {
    expect(true).to.equal(true)
  });

  it('User should see a grid of movies containing posters on page load', () => {
    cy.contains('Movie time')
    cy.get('.CardContainer')
      .should('be.visible')
  });
});
