// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Gérer efficacement votre stock !')
    cy.contains('Gestion Stock')
    cy.contains('footer', 'Mentions Légales')
    cy.contains('a', 'Voir le stock').click()
    cy.get('a[title="Ajouter"]').click()

    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const testname = `o${id}`
    cy.get('input').first().clear().type(testname)
    cy.get('input').eq(1).clear().type('12.56')
    cy.get('input').eq(2).clear().type('34')
    cy.contains('button', 'Ajouter').click()
    cy.contains('Liste des articles')
    cy.get('tbody').contains('td.name', testname).click()
    cy.get('button[title="Supprimer"]').click()
  })

  it('cannot load articles', () => {
    cy.visit('/')
    cy.contains('a', 'Voir le stock').click()
    cy.intercept('GET', '/api/articles', {
      statusCode: 500
    })
  })
})
