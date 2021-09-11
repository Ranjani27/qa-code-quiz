/// <reference types="Cypress" />

describe('Verify login  page components', ()=> {

       //placeholder for title
    it('1. Check header exists', () => {
        cy.visit ('http://localhost:8080/')
        cy.get('body').should('exist');//Ranjani to check
    })

    it('2. Check enter username field exists', ()=> {
        cy.visit ('http://localhost:8080/')
        cy.get('[placeholder="Enter Username"]').should('exist');
    })

    it('3. Check enter password field exists', ()=> {
        cy.visit ('http://localhost:8080/')
        cy.get('[placeholder="password"]').should('exist');
    })
    
    it('4. Check login button exists', () => {
        cy.visit ('http://localhost:8080/')
        cy.get('.sc-bZQynM').should('exist');
    })

    it('5. Check contact admin text exists', () => {
        cy.visit ('http://localhost:8080/')
        cy.get('.sc-ifAKCX > div').should('exist');//Ranjani to add contain
    })
 

    //To check the behaviour of the login portal for incorrect username and password combinations
    
    it('6. Check login with incorrect username', ()=> {
        cy.visit ('http://localhost:8080/')
        cy.get('[placeholder="Enter Username"]').type('dummytre')
        cy.get('[placeholder="password"]').type('test1')
        cy.get('.sc-bZQynM').click()
        cy.contains('Incorrect username or bad password').should('exist')
    })

    it('7. Check login with incorrect password', ()=> {
        cy.visit ('http://localhost:8080/')
        cy.get('[placeholder="Enter Username"]').type('dummytree')
        cy.get('[placeholder="password"]').type('test')
        cy.get('.sc-bZQynM').click()
        cy.contains('Incorrect username or bad password').should('exist')
        
    })

    //To check if the password is masked while entering
    it('8. Check if password field is masked while entering', ()=> {
        cy.visit ('http://localhost:8080/')
        .get('[placeholder="Enter Username"]').type('dummytree')
        .get('[placeholder="password"]').type('test1').should('be.hidden')

    })

    //Successful login and redirection
    it('9. Check login succesful and redirection', ()=> {
         cy.visit ('http://localhost:8080/')
         cy.get('[placeholder="Enter Username"]').type('dummytree')
         cy.get('[placeholder="password"]').type('test1')
         cy.get('.sc-bZQynM').click()
         .visit('http://localhost:8080/')

        })
    
    

})

