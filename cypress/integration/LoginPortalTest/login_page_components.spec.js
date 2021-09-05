/// <reference types="Cypress" />


describe('login  page components', ()=> {

       //placeholder for title
    it('Check header exists', () => {
        cy.visit ('http://localhost:8080/')
        cy.get('body').should('exist');//Ranjani to check
    })

    it('Check enter username field exists', ()=> {
        cy.visit ('http://localhost:8080/')
        cy.get('[placeholder="Enter Username"]').should('exist');
    })

    it('Check enter password field exists', ()=> {
        cy.visit ('http://localhost:8080/')
        cy.get('[placeholder="password"]').should('exist');
    })
    
    it('Check login button exists', () => {
        cy.visit ('http://localhost:8080/')
        cy.get('.sc-bZQynM').should('exist');
    })

    it('Check contact admin text exists', () => {
        cy.visit ('http://localhost:8080/')
        cy.get('.sc-ifAKCX > div').should('exist');//Ranjani to add contain
    })
 

    //To check the behaviour of the login portal for incorrect username and password combinations
    
    it('Check login with incorrect username', ()=> {
        cy.visit ('http://localhost:8080/')
        cy.get('[placeholder="Enter Username"]').type('dummytre')
        cy.get('[placeholder="password"]').type('test1')
        cy.get('.sc-bZQynM').click()
        cy.contains('Incorrect username or bad password').should('exist')
    })

    it('Check login with incorrect password', ()=> {
        cy.visit ('http://localhost:8080/')
        cy.get('[placeholder="Enter Username"]').type('dummytree')
        cy.get('[placeholder="password"]').type('test')
        cy.get('.sc-bZQynM').click()
        cy.contains('Incorrect username or bad password').should('exist')
        
    })

    //To check if the password is masked while entering
    xit('Check if password field is masked while entering', ()=> {
        cy.visit ('http://localhost:8080/')
        .get('[placeholder="password"]').type('test1')
        .contains ('*****') //to check google

    })

    //Successful login and redirection
    it('Check login succesful and redirection', ()=> {
         cy.visit ('http://localhost:8080/')
         cy.get('[placeholder="Enter Username"]').type('dummytree')
         cy.get('[placeholder="password"]').type('test1')
         cy.get('.sc-bZQynM').click()
         .visit('http://localhost:8080/')

        })

    

})

