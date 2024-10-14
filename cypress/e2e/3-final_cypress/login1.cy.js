describe('login', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('TC-01', () => {
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()
    })
    it('TC-02', () => {
        cy.get('#username').type('susume')
        cy.get('#password').type('SuperSecretPassword')
        cy.get('.fa').click()
    })
    it('TC-03', () => {
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('Passwork123')
        cy.get('.fa').click()
    })
    


})