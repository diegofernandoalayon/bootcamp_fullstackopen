
describe('Note App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('frontpage can be opened', () => {
    cy.contains('Notes')
  })
  it('login form can be opened', () => {
    cy.contains('Show login').click()
  })
  it('user can login', () => {
    cy.contains('Show login').click()
    cy.get('[placeholder=Username]').type('dfar')
    cy.get('[placeholder=Password]').type('dfar98')
    cy.get('#form-login-button').click()
    cy.contains('Create a new note')
  })
  describe('when logged in', () => {
    beforeEach(() => {
      cy.contains('Show login').click()
      cy.get('[placeholder=Username]').type('dfar')
      cy.get('[placeholder=Password]').type('dfar98')
      cy.get('#form-login-button').click()
      cy.contains('Create a new note')
    })
    it('a new note can be created', () => {
      cy.contains('New Note').click()
      cy.get('input').type('a note created by cypress')
      cy.contains('Crear nota').click()
      cy.contains('a note created by cypress')
    })
  })
})
