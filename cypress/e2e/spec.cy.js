describe('Quotes', () => {
  it('are showing', () => {
    cy.visit('http://localhost:3000/quotes')
    cy.contains('Ir al detalle')
  })
})
