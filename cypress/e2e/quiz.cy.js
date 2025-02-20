describe("Tech Quiz App", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("loads the homepage", () => {
      cy.contains("Start").should("be.visible");
    });
  
    it("starts the quiz", () => {
      cy.contains("Start").click();
      cy.get(".question").should("be.visible");
    });
  
    it("goes through the quiz and shows final score", () => {
      cy.contains("Start").click();
      for (let i = 0; i < 10; i++) {
        cy.get(".answer-btn").first().click();
      }
      cy.contains("Your Score:").should("be.visible");
    });
  
    it("allows restarting the quiz", () => {
      cy.contains("Start").click();
      for (let i = 0; i < 10; i++) {
        cy.get(".answer-btn").first().click();
      }
      cy.contains("Restart Quiz").click();
      cy.contains("Start").should("be.visible");
    });
  });