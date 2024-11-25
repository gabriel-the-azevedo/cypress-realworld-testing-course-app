describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context("Hero Section", () => {
    it('renders the h1 with the correct text', () => {
      cy.getByData("hero-heading").should("exist").contains("Testing Next.js Applications with Cypress")
    })
    
    it('renders the course features correctly', () => {
      cy.get('dt').eq(0).contains('4 Courses')
      cy.get('dt').eq(1).contains('25+ Lessons')
      cy.get('dt').eq(2).contains('Free and Open Source')
    })
  })

  context("Courses Section", () => {
    it("directs the user to the correct course page (First Course)", () => {
      cy.getByData("course-0").find("a").contains("Get started").click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })
    it("directs the user to the correct course page (Second Course)", () => {
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("eq", "/testing-foundations")
    })
    it("directs the user to the correct course page (Third Course)", () => {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("eq", "/cypress-fundamentals")
    })
  })
})