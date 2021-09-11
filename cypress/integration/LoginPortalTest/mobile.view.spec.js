/// <reference types="Cypress" />


//verify mobile view for login portal
describe('Mobile testing', ()=> {
    it('Check mobile view for iphone 6+', ()=> {
        cy.viewport("iphone-6+")
        cy.visit ('http://localhost:8080/')
        .get('[placeholder="Enter Username"]').type('dummytree')
        .get('[placeholder="password"]').type('test123')
        .get('.sc-bZQynM').click()
    }) 

    it('Check mobile view for ipad-mini', ()=> {
        cy.viewport("ipad-mini")
        cy.visit ('http://localhost:8080/')
        .get('[placeholder="Enter Username"]').type('Ranjani27')
        .get('[placeholder="password"]').type('test123')
        .get('.sc-bZQynM').click()
    }) 

    it('Check mobile view for samsung S10', ()=> {
        cy.viewport("samsung-s10")
        cy.visit ('http://localhost:8080/')
        .get('[placeholder="Enter Username"]').type('Ranjani27')
        .get('[placeholder="password"]').type('test123')
        .get('.sc-bZQynM').click()
    })


    })