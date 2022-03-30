describe("login to the gmail", ()=>{
    beforeEach(() => {
        cy.visit('')
    })

    const email = Cypress.env("CYPRESS_USERNAME");
    const password = Cypress.env("CYPRESS_PASSWORD");
    
    it("login and land to the dashboard", () => {
        cy.get("#L2AGLb > .QS5gu").click();
        cy.get(".gLFyf").click().type(password).get("li").first().click();
        cy.contains("Images").should("exist");
    });
})