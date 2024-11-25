describe("Home Page Newsletter Tests", () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it("allows users to subscribe to the email list", () => {
      cy.getByData("email-input").type('test@example.com')
      cy.getByData("submit-button").click()
      cy.getByData("success-message").should("exist").contains("test@example.com")
    })

    it("does NOT allow an invalid email address", () => {
      cy.getByData("email-input").type('invalid')
      cy.getByData("submit-button").click()
      cy.getByData("success-message").should("not.exist")
    })

    it("does NOT add a user to the email list if they're already in it", () => {
      cy.getByData("email-input").type('john@example.com')
      cy.getByData("submit-button").click()
      cy.getByData("server-error-message").should("exist").contains("john@example.com")
    })
})