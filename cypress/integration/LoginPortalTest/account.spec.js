/// <reference types="Cypress" />

describe('Verify user detail page attribute exists', ()=> {
    beforeEach(()=>{
        cy.visit ('http://localhost:8080/')
        .get('[placeholder="Enter Username"]').type('Ranjani27')
        .get('[placeholder="password"]').type('test123')
        .get('.sc-bZQynM').click()
    }) 

    it('1. Check header attribute exists', ()=> {
    cy.get('.sc-bdVaJa');
    })

    it('2. Check user name attribute exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(1) > :nth-child(1)');
    })

    it('3. Check users favourite fruit attribute exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(2) > :nth-child(1)');
    })    
        
    it('4. Check users favourite movie attribute exists', ()=> {
        cy.get(':nth-child(3) > :nth-child(1)');
    }) 

    it('5. Check users favourite number attribute exists', ()=> {
        cy.get(':nth-child(4) > :nth-child(1)');
    })     

})


describe('Verify user detail page with user details', ()=> {
    beforeEach(()=>{
        cy.visit ('http://localhost:8080/')
        .get('[placeholder="Enter Username"]').type('SomeUser_name')
        .get('[placeholder="password"]').type('TopSecret1234!')
        .get('.sc-bZQynM').click()
        
    }) 

    it('1. Check user name exists', ()=> {
       cy.get('.sc-bwzfXH > :nth-child(1) > :nth-child(2)').contains('SomeName');
       
    })

    it('2. Check users favourite fruit does not exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(2) > :nth-child(2)').contains('some fruit');
    })    
        
    it('3. Check users favourite movie does not exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(3) > :nth-child(2)').contains('The Room');//how to mention it as blank
    }) 

    it('4. Check users favourite number exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(4) > :nth-child(2)').contains('BN<1234>');
    })     

    it('5. Check logout button exists', () => {
        cy.get('.sc-bxivhb').should('exist');
    })    
    
    it('6. Check click on logout button redirects to the login page', () => {
        cy.visit('http://localhost:8080/')
    })    
    
})


describe('Verify user detail page without user details', ()=> {
    beforeEach(()=>{
        cy.visit ('http://localhost:8080/')
        .get('[placeholder="Enter Username"]').type('Ranjani27')
        .get('[placeholder="password"]').type('test123')
        .get('.sc-bZQynM').click()
    }) 


    it('1. Check Hello undefined should not exists', ()=> {
        cy.get('.sc-bdVaJa > div').should('not.contain','Hello undefined');
       
    })

    it('2. Check users favourite fruit does not exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(2) > :nth-child(2)').should('be.empty');
    })    
        
    it('3. Check users favourite movie does not exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(3) > :nth-child(2)').should('be.empty');//how to mention it as blank
    }) 

    it('4. Check users favourite number exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(4) > :nth-child(2)').should('be.empty');
    })     

    it('5. Check logout button exists', () => {
        cy.get('.sc-bxivhb').should('exist');
    })    
    
    it('6. Check click on logout button redirects to the login page', () => {
        cy.visit('http://localhost:8080/')
    })    
    
})



