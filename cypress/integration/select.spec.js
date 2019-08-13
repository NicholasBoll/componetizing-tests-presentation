/// <reference types="Cypress" />
/// <reference types="cypress-pipe" />

const { getSelect, select } = require('../helpers/select')

context('Select', () => {
  beforeEach(() => {
    cy.visit('https://serene-hawking-021d7a.netlify.com/iframe.html?id=react-select-virtualized-big-data--with-8000-elements')
    // cy.visit('http://localhost:9009/iframe.html?id=react-select-virtualized-big-data--with-8000-elements') // use if you run https://github.com/guiyep/react-select-virtualized locally using `npm run start`
  })

  it('should select something we can see', () => {
    cy.get('.react-select-virtualized')
      .click()

    cy.contains('- 5').click({ force: true })

    cy.get('.react-select-virtualized')
      .should('contain', '- 5')
  })

  it(`should select something we can't see`, () => {
    cy.get('.react-select-virtualized')
      .click()

    cy.contains('- 100').click({ force: true })

    cy.get('.react-select-virtualized')
      .should('contain', '- 100')
  })

  it('should select the 100th item in the list', () => {
    getSelect()
      .pipe(select('- 100'))

    getSelect()
      .should('contain', '- 100')
  })

})
