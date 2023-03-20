describe('Basic Visual Testing',  () => {

    beforeEach(function(){
        cy.visit('https://www.tvo.org/series-docs')
    })

    it('Visual Test 1', () => {
        // cy.eyesCheckWindow('TVO docs series landing page')
        cy.screenshot('TVO docs series landing page')

        cy.get('div > .MuiButtonBase-root-111 > .MuiButton-label-85')
            .should('be.visible')
            .should('contain', 'Watch Now')
            .click()

        // cy.eyesCheckWindow('TVO docs series feature documentary') 
        cy.screenshot('TVO docs series feature documentary')   
    })

    it('Visual Test 2', () => {
        cy.get('div > .MuiButtonBase-root-111 > .MuiButton-label-85')
            .should('have.css', 'background-color', 'rgb(213,19,26)')
    })

    it('Visual Test 3', () => {
        cy.get('div > .MuiButtonBase-root-111 > .MuiButton-label-85')
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
    })

    it('Visual Test 4', () => {
        cy.get('.jss390')
            .should('have.css', 'background-color','rgb(54, 55, 71)')
            .and('have.css', 'position', 'fixed')
    })

})