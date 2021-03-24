describe("Landing Page", () => {
  it("Should redirect to login", async ( ) => {
    cy.url().should("eq", "http://localhost:3000/login")
  });
});