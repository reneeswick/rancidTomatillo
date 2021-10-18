describe('Cards:', () => {
  it('When user clicks a movie poster, they should see details for that movie', () => {
    cy.get('img[id="694919"]').click()
    cy.get('.movie-details-container').should('be.visible')
  })
})