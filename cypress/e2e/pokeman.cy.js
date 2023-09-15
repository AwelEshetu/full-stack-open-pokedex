describe('Pokedex', function() {
  beforeEach(function() {
    cy.visit('http://127.0.0.1:5000')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})