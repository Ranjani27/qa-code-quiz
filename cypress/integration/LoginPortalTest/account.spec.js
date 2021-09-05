/// <reference types="Cypress" />
import { HOST } from "../../support/constant";

describe('Verify account page attribute exists', ()=> {
    beforeEach(()=>{
        cy.visit (HOST)
        .get('[placeholder="Enter Username"]').type('Ranjani27')
        .get('[placeholder="password"]').type('test123')
        .get('.sc-bZQynM').click();
    }) 

    it('Check header attribute exists', ()=> {
    cy.get('.sc-bdVaJa');
    })

    it('Check user name attribute exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(1) > :nth-child(1)');
    })

    it('Check users favourite fruit attribute exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(2) > :nth-child(1)');
    })    
        
    it('Check users favourite movie attribute exists', ()=> {
        cy.get(':nth-child(3) > :nth-child(1)');
    }) 

    it('Check users favourite number attribute exists', ()=> {
        cy.get(':nth-child(4) > :nth-child(1)');
    })     
})

describe('Verify account page with user details', ()=> {
    beforeEach(()=>{
        cy.visit (HOST)
        .get('[placeholder="Enter Username"]').type('SomeUser_name')
        .get('[placeholder="password"]').type('TopSecret1234!')
        .get('.sc-bZQynM').click();
        
    }) 

    it('Check user name exists', ()=> {
       cy.get('.sc-bwzfXH > :nth-child(1) > :nth-child(2)').contains('SomeName');
       
    })

    it('Check users favourite fruit does not exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(2) > :nth-child(2)').contains('some fruit');
    })    
        
    it('Check users favourite movie does not exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(3) > :nth-child(2)').contains('The Room');
    }) 

    it('Check users favourite number exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(4) > :nth-child(2)').contains('BN<1234>');
    })     

    it('Check logout button exists', () => {
        cy.get('.sc-bxivhb').should('exist');
    })    
    
    it('Check click on logout button redirects to the login page', () => {
        cy.get('.sc-bxivhb').click()
        .get('[placeholder="Enter Username"]').should('exist')
        .get('[placeholder="password"]').should('exist');
    })    
    
})


describe('Verify account page without user details', ()=> {
    beforeEach(()=>{
        cy.visit (HOST)
        .get('[placeholder="Enter Username"]').type('Ranjani27')
        .get('[placeholder="password"]').type('test123')
        .get('.sc-bZQynM').click();
    }) 


    it('Check Hello undefined should not exists', ()=> {
        cy.get('.sc-bdVaJa > div').should('not.contain','Hello undefined');
       
    })

    it('Check users favourite fruit does not exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(2) > :nth-child(2)').should('be.empty');
    })    
        
    it('Check users favourite movie does not exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(3) > :nth-child(2)').should('be.empty');
    }) 

    it('Check users favourite number exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(4) > :nth-child(2)').should('be.empty');
    })     

    it('Check logout button exists', () => {
        cy.get('.sc-bxivhb').should('exist');
    })    
    
    it('Check click on logout button redirects to the login page', () => {
        cy.get('.sc-bxivhb').click()
        .get('[placeholder="Enter Username"]').should('exist')
        .get('[placeholder="password"]').should('exist');
    })    
})
