describe('Supply Brain Login scenario', function() {
	it('Visits the Login page and executes login', function() {
		cy.visit("https://api-demo.supplybrain.io/login");
		cy.get('input#email').type('njdemo@njtest.com');
		cy.get('input#password').type('njdemo1234');
		cy.get('button.btn.btn-primary').click();
		
		// Element containing the "You are logged in!" text
		cy.get('div.card-body').should('be.visible');
	})
})