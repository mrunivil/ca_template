describe('Sign Out', () => {
  beforeEach(() => {
    cy.login();
    cy.intercept('POST', '/api/v1/sign-out', {
      statusCode: 200,
    });
  });

  it('should have a button to sign out', () => {
    cy.get('[data-cy="signOut"').click();
    cy.url().should('contain', 'authentication');
  });
});
