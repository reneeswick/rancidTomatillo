describe('Cards:', () => {

  it('Should display movie if poster is clicked', () => {
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919", {
      statusCode: 201,
      body: {
        "movie": {
          "id": 694919,
          "title": "This is a test",
          "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
          "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RCA_Indian_Head_Test_Pattern.svg/1200px-RCA_Indian_Head_Test_Pattern.svg.png",
          "release_date": "2020-09-29",
          "overview": "This is made-up testing overview language, to indicate our intercept is working correctly.",
          "genres": [
            "Action"
          ],
          "budget": 0,
          "revenue": 0,
          "runtime": 82,
          "tagline": "",
          "average_rating": 6.142857142857143
        }
      }
    })

    cy.get('img[id="694919"]').click()
    cy.get('.movie-details-container').should('be.visible')
    cy.contains('This is a test')
  });

})