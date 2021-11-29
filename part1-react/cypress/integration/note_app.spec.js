
describe('Note App', () => {
  it('frontpage can be opened', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Notes')
  })
  it('login form can be opened', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Show login').click()
  })
})
