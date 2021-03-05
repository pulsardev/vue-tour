Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Vue Tour functionalities', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is displayed on page load', () => {
    const step0 = cy.get('.v-tour')
    step0.get('.v-step__content').contains('Discover Vue Tour!')
    step0.get('.v-step__button-skip').contains('Skip tour')
    step0.get('.v-step__button-next').contains('Next')
  })

  it('loads the second step', () => {
    const step0 = cy.get('.v-tour')
    step0.get('.v-step__button-next').click()
    const header = step0.get('.v-step__header')
    header.contains('Vue Tour')
    const content = step0.get('.v-step__content')
    content.contains('An awesome plugin made with Vue.js!')
    step0.get('.v-step__button-skip').contains('Skip tour')
    step0.get('.v-step__button-next').contains('Next')
  })
})
