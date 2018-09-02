// https://docs.cypress.io/api/introduction/api.html

let steps = [
  '#v-step-46f34eda',
  '#v-step-575af512',
  '#v-step-46f34ed8',
  '#v-step-46f34ed6',
  '#v-step-46f34ed4'
]

describe('Home.vue', () => {
  before(() => {
    // runs once before all tests in the block
    cy.visit(Cypress.env('VUE_DEV_SERVER_URL'))
  })

  it('diplays the homepage', () => {
    cy.contains('h2', 'VUE TOUR')
  })

  it('diplays the first step when mounted', () => {
    steps.forEach((step, index) => {
      if (index === 0) {
        cy.get(step).should('be.visible')
      } else {
        cy.get(step).should('not.be.visible')
      }
    })
  })

  it('diplays the next step when one clicks on "Next"', () => {
    for (let currentStep = 0; currentStep < steps.length - 1; currentStep++) {
      cy.log(currentStep)
      cy.get(steps[currentStep]).within(($step) => {
        cy.get('button').contains(currentStep === 2 ? 'Next step' : 'Next').click()
      })

      steps.forEach((step, index) => {
        if (index === currentStep + 1) {
          cy.get(step).should('be.visible')
        } else {
          cy.get(step).should('not.be.visible')
        }
      })
    }
  })

  it('diplays the previous step when one clicks on "Previous"', () => {
    for (let currentStep = steps.length - 1; currentStep > 0; currentStep--) {
      cy.log(currentStep)
      cy.get(steps[currentStep]).within(($step) => {
        cy.get('button').contains(currentStep === 2 ? 'Previous step' : 'Previous').click()
      })

      steps.forEach((step, index) => {
        if (index === currentStep - 1) {
          cy.get(step).should('be.visible')
        } else {
          cy.get(step).should('not.be.visible')
        }
      })
    }
  })

  it('must skip the tour when one clicks on "Skip tour"', () => {
    cy.get(steps[0]).within(($step) => {
      cy.get('button').contains('Skip tour').click()
    })

    steps.forEach((step) => {
      cy.get(step).should('not.be.visible')
    })
  })
})
