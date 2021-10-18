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

  // it('Should display error to user if API is broken', () => {
  //   cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
  //     statusCode: 201,
  //     body: {
  //       id: '1234',
  //       poster_path: 'http://wwww.google.com'
  //     }
  //   })
  //   cy.contains('https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  // cy.get('.error-message').contains('There is an error with the server, please try again.')
  // });

});
