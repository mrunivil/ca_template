describe('Counter', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should show the counter', () => {
    cy.get('[data-cy="counter"').should('be.visible');
  });
  it('should increase the counter by 1', () => {
    cy.intercept('/api/v1/count/increase', {
      body: '1',
    });
    cy.get('[data-cy="counter"').should('contain', '0');
    cy.get('[data-cy="counter-increase"').click();
    cy.get('[data-cy="counter"').should('contain', '1');
  });
  it('should decrease the counter by 1', () => {
    cy.intercept('/api/v1/count/decrease', {
      body: '-1',
    });
    cy.get('[data-cy="counter"').should('contain', '0');
    cy.get('[data-cy="counter-decrease"').click();
    cy.get('[data-cy="counter"').should('contain', '-1');
  });
});
