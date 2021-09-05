/// <reference types="Cypress" />
import { HOST } from "../../support/constant";

describe('Mobile device testing', ()=> {
    it('Check mobile view for iphone 6+(IOS)', ()=> {
        cy.viewport("iphone-6+")
        cy.visit (HOST)
        .get('[placeholder="Enter Username"]').type('dummytree')
        .get('[placeholder="password"]').type('test123')
        .get('.sc-bZQynM').click();
    }) 

    it('Check mobile view for ipad-mini(ipad)', ()=> {
        cy.viewport("ipad-mini")
        cy.visit (HOST)
        .get('[placeholder="Enter Username"]').type('Ranjani27')
        .get('[placeholder="password"]').type('test123')
        .get('.sc-bZQynM').click();
    }) 

    it('Check mobile view for samsung S10(Android)', ()=> {
        cy.viewport("samsung-s10")
        cy.visit (HOST)
        .get('[placeholder="Enter Username"]').type('Ranjani27')
        .get('[placeholder="password"]').type('test123')
        .get('.sc-bZQynM').click();
    })
    })