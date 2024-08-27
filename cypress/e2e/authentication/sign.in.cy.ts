describe('Sign In', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visits the initial project page', () => {
    cy.intercept('POST', '/api/v1/sign-in', {
      statusCode: 200,
      body: {
        name: 'John Doe',
      },
    }).as('signIn');
    cy.get('[data-cy=signIn]').click();
    cy.wait('@signIn')
      .its('response.body')
      .should('deep.equal', { name: 'John Doe' });
  });

  it('should not redirect to dashboard', () => {
    cy.intercept('POST', '/api/v1/sign-in', {
      statusCode: 500,
    }).as('signIn');
    cy.get('[data-cy=signIn]').click();
    cy.wait('@signIn');
    cy.url().should('contain', 'authentication');
  });
});
