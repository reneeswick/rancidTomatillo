describe('Movie details:', () => {
  beforeEach(() => {
    cy.get('img[id="694919"]').click()
  });
  it('Should display individual movie details', () => {
    cy.get('.movie-details-container').should('be.visible')
    cy.get('.movie-details-container').contains("Money Plane")
  });
  it('When user clicks the home button, they should return home', () => {
    cy.get('button').click()
    cy.url().should("include", "http://localhost:3000/");
  });
})