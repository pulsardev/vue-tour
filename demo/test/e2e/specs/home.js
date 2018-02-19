// https://docs.cypress.io/api/introduction/api.html

describe('Home.vue', () => {
  it('diplays the homepage', () => {
    cy.visit(Cypress.env('VUE_DEV_SERVER_URL'))
    cy.contains('h2', 'VUE TOUR')
  })
})
