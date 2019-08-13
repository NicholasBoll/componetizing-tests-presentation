const timeout = 10000

/**
 * Return a select component to select options from or get selected option
 * @param {string} selector Optional selector
 */
export const getSelect = (selector = '.react-select-virtualized') => {
  return cy.get(selector)
}

/**
 * Given a selectable element, select an option that matches the provided name
 * @param {string} name
 * @returns {(name: JQuery) => Cypress.Chainable<JQuery>}
 */
export const select = name => function select($el) {
  cy.wrap($el).click()

  cy.get('.ReactVirtualized__Grid')
    .then({ timeout }, scrollTo(name))
    .click({ force: true })

  return cy.wrap($el)
}

const raf = () => new Promise(resolve => {
  requestAnimationFrame(resolve)
})

/**
 * Scroll a virtual list until a item is found that contains the provided string
 * @param {string} match
 * @returns {() => Promise<JQuery>}
 */
const scrollTo = match => async ($el) => {
  let scrollTop = 0

  while (Cypress.$(`.fast-option:contains("${match}")`).length === 0) {
    await raf()
    scrollTop += 8
    Cypress.$('.ReactVirtualized__Grid').scrollTop(scrollTop)
  }

  return Cypress.$(`.fast-option:contains("${match}")`)
}
