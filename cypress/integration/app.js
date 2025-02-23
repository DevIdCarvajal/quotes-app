describe("Quotes", function() {
  it("are showing", function() {
    cy.visit("http://localhost:3000")
    cy.contains("Ir al detalle")
  })
})
