import { mountCallback } from '@cypress/vue';
import Button from './Button.vue';
import { ButtonProperties } from './ButtonProperties';

describe(Button.name, () => {
  const title = 'button title';

  const properties: ButtonProperties = new ButtonProperties({
    title,
  });

  beforeEach(
    mountCallback(Button, {
      propsData: { properties },
    }),
  );

  it('should have title, type and be disabled', () => {
    cy.log(Cypress.env('NODE_ENV'));

    cy.get('.button__control').should('contain.text', title);

    cy.get('.button__control--disabled').should('be.visible');
    cy.get('.button__control').should('be.disabled');
  });
});
