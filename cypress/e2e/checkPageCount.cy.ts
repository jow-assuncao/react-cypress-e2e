describe("Test Counter", () => {
  it("should verify initial counter text and interactions", () => {
    cy.visit("http://localhost:5173/");

    const button = cy.get("button");

    button.should("have.text", "count is 0");
    button.click()
    button.should("have.text", "count is 1");
  });
});
