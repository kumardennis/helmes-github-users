describe('searching for users', () => {
  const sampleQuery = 'bob'
  beforeEach(() => {
    cy.visit('/')
  })

  it('has input field', () => {
    cy.get('.search-input')
  })

  it('focuses on input', () => {
    cy.focused()
  })

  it('accepts value', () => {
    cy.get('.search-input').type(sampleQuery).should('have.value', sampleQuery)
  })

  it('adds query to recent searches and localStorage', () => {
    cy.get('.search-input')
      .type(sampleQuery)
      .should('have.value', sampleQuery)
      .then(() => {
        cy.get('.search-btn')
          .click()
          .then(() => {
            cy.reload().then(() => {
              expect(sampleQuery).to.be.oneOf(
                JSON.parse(localStorage.getItem('latestSearches')),
              )
            })
          })
      })
  })
})
