describe("Teste page initial state", () => {
  it("should access main page and check the h1 text and page title", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h1").should("exist").should("have.text", "Vite + React");
    cy.title().should('eq', "react-cypress-e2e");
  });
});
