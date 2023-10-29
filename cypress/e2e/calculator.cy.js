describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('should update running total, when 2 and 4 clicked display 24', () => {
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '24')
  })
  it('should update screen when two numbers are multiplyed, 2*6 to equal 12', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '12');
  })
  it('should update screen when two numbers are divided, 6/3 to equal 2', () => {
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3');
  })
  it('should update screen when two numbers are added, 9+2 to equal 11', () => {
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '11');
  })
  it('should update screen when two numbers are subtracted, 6-4 to equal 2', () => {
    cy.get('#number6').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2');
  })
  it('should allow to chain multiple operations, 3*5/3 to equal 5', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5');
  })
  it('should calculate when result is negative number, 2-6 to equal -4', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-4');
  })
  it('should calculate when result is with decimals, 2.5+4 to equal 6.5', () => {
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6.5');
  })
  it('should calculate when numbers are very large, 434349813+328923 to equal 434678736', () => {
    cy.get('#number4').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number1').click();
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#number2').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '434678736');
  })
  it('should not allow to divide by zero, and display message', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#attempt-to-divide-by-zero').should('contain', 'You can\'t do this');
  })
})
