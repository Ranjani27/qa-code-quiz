/// <reference types="Cypress" />
import { HOST } from "../../support/constant";

describe('Verify login  page components', ()=> {
    it('Check header exists', () => {
        cy.visit (HOST)
        cy.get('body').should('exist');
    })

    it('Check enter username field exists', ()=> {
        cy.visit (HOST)
        cy.get('[placeholder="Enter Username"]').should('exist');
    })

    it('Check enter password field exists', ()=> {
        cy.visit (HOST)
        cy.get('[placeholder="password"]').should('exist');
    })
    
    it('Check login button exists', () => {
        cy.visit (HOST)
        cy.get('.sc-bZQynM').should('exist');
    })

    it('Check contact admin text exists', () => {
        cy.visit (HOST)
        cy.get('.sc-ifAKCX > div').contains('If you do not have an account, contact an admin');
    })
    
    it('Check login with incorrect username', ()=> {
        cy.visit (HOST)
        cy.get('[placeholder="Enter Username"]').type('dummytre')
        cy.get('[placeholder="password"]').type('test1')
        cy.get('.sc-bZQynM').click()
        cy.contains('Incorrect username or bad password').should('exist');
    })

    it('Check login with incorrect password', ()=> {
        cy.visit (HOST)
        cy.get('[placeholder="Enter Username"]').type('dummytree')
        cy.get('[placeholder="password"]').type('test')
        cy.get('.sc-bZQynM').click()
        cy.contains('Incorrect username or bad password').should('exist');
        
    })
    
    it('Check if password field is masked while entering', ()=> {
        cy.visit (HOST)
        .get('[placeholder="Enter Username"]').type('dummytree')
        .get('[placeholder="password"]').type('test1').should('be.hidden');
    })

    it('Check login succesful and redirection', ()=> {
         cy.visit (HOST)
         .get('[placeholder="Enter Username"]').type('dummytree')
         .get('[placeholder="password"]').type('test1')
         .get('.sc-bZQynM').click()
         .visit(HOST);
    })     
})