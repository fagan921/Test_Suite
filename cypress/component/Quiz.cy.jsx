import React from "react";
import { mount } from "cypress/react";
import Quiz from "../../client/src/components/Quiz";

describe("Quiz Component", () => {
  it("renders the quiz component", () => {
    mount(<Quiz />);
    cy.get("button").contains("Start").should("exist");
  });

  it("starts the quiz when clicking start", () => {
    mount(<Quiz />);
    cy.get("button").contains("Start").click();
    cy.get(".question").should("exist");
  });
});