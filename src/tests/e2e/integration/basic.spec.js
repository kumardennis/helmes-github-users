describe('Initial load of the page', () => {
  it('renders without crashing', () => {
    cy.visit('/')
  })

  it('should have header saying HELMES', () => {
    cy.visit('/').get('h1').should('have.text', 'HELMES')
  })
})
