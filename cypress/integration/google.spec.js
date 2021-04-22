describe("Google tests", () => {
  it("Google positive test", () => {
    cy.visit("https://google.com");
    cy.get('input[name="q"]').type("cypress dashboard").type("{enter}");
    cy.get("div.g h3")
      .first()
      .should(
        "have.text",
        "Test and debug faster with the Cypress Dashboard | cypress.io"
      );
  });

  it("Google negative test", () => {
    cy.visit("https://google.com");
    cy.get('input[name="q"]').type("cypress dashboard").type("{enter}");
    cy.get("div.g h3")
      .first()
      .should(
        "have.text",
        "Selenium"
      );
  });
});
