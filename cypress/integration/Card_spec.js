describe('Cards:', () => {

  it.skip('Should display movie if poster is clicked', () => {
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919", {
      statusCode: 201,
      body: {
        id: '1234',
        poster_path: 'http://wwww.google.com'
      }
    })
    cy.get('img[poster="http://www.google.com"]').click()
  });

  it('When user clicks a movie poster, they should see details for that movie', () => {
    cy.get('img[id="694919"]').click()
    cy.get('.movie-details-container').should('be.visible')
  });
})