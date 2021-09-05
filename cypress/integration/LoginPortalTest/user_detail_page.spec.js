/// <reference types="Cypress" />

//verify if user detail page elements exist.

describe('user detail page', ()=> {
    it('1. Check header exists', ()=> {
    cy.visit ('http://localhost:8080/')
    .viewport("iphone-6")
    .get('[placeholder="Enter Username"]').type('SomeUser_name')
    .get('[placeholder="password"]').type('TopSecret1234!')
    .get('.sc-bZQynM').click()
    .get('.sc-bdVaJa > div').contains('Hello SomeName');
    })

    it('2. Check user name exists', ()=> {
        cy.visit ('http://localhost:8080/')
        .viewport("iphone-6")
        .get('[placeholder="Enter Username"]').type('SomeUser_name')
        .get('[placeholder="password"]').type('TopSecret1234!')
        .get('.sc-bZQynM').click()
        .get('.sc-bwzfXH > :nth-child(1) > :nth-child(2)').contains('SomeName');
        })

    it('3. Check users favourite fruit exists', ()=> {
        cy.visit ('http://localhost:8080/')
        .viewport("samsung-note9")
        .get('[placeholder="Enter Username"]').type('SomeUser_name')
        .get('[placeholder="password"]').type('TopSecret1234!')
        .get('.sc-bZQynM').click()
        .get('.sc-bwzfXH > :nth-child(2) > :nth-child(2)').contains('some fruit');
        })    
        
    it('4. Check users favourite movie exists', ()=> {
        cy.visit ('http://localhost:8080/')
        .viewport('ipad-2')
        .get('[placeholder="Enter Username"]').type('SomeUser_name')
        .get('[placeholder="password"]').type('TopSecret1234!')
        .get('.sc-bZQynM').click()
        .get('.sc-bwzfXH > :nth-child(3) > :nth-child(2)').contains('The Room');
        }) 
    
    it('5. Check users favourite movie exists', ()=> {
        cy.visit ('http://localhost:8080/')
        .viewport("macbook-11")
        .get('[placeholder="Enter Username"]').type('SomeUser_name')
        .get('[placeholder="password"]').type('TopSecret1234!')
        .get('.sc-bZQynM').click()
        .get('.sc-bwzfXH > :nth-child(3) > :nth-child(2)').contains('The Room');
        }) 

    it('6. Check users favourite number exists', ()=> {
        cy.visit ('http://localhost:8080/')
        .viewport("macbook-11")
        .get('[placeholder="Enter Username"]').type('SomeUser_name')
        .get('[placeholder="password"]').type('TopSecret1234!')
        .get('.sc-bZQynM').click()
        .get('.sc-bwzfXH > :nth-child(4) > :nth-child(2)').contains('BN<1234>');
        })     

    it('7. Check logout button exists', () => {
        cy.visit ('http://localhost:8080/')
        .get('[placeholder="Enter Username"]').type('SomeUser_name')
        .get('[placeholder="password"]').type('TopSecret1234!')
        .get('.sc-bZQynM').click()
        .get('.sc-bxivhb').should('exist');
        })    

    it('8. Check click on logout button redirects to the login page', () => {
        cy.visit ('http://localhost:8080/')
        .get('[placeholder="Enter Username"]').type('SomeUser_name')
        .get('[placeholder="password"]').type('TopSecret1234!')
        .get('.sc-bZQynM').click()
        .get('.sc-bxivhb').click()
        .visit('http://localhost:8080/')
        })    
    


        


    // placeholder for title

    // Successful login and redirection
    // it('Check login succesful and redirection', ()=> {
    //     cy.visit ('http://localhost:8080/')
    //     cy.viewport("iphone-6")
    //     cy.get('[placeholder="Enter Username"]').type('dummytree')
    //     cy.get('[placeholder="password"]').type('test1')
    //     cy.get('.sc-bZQynM').click()
    //     .visit('http://localhost:8080/')
    
    // })

    // To check the behaviour of the login portal for incorrect username and password combinations
    
    // it('Check login with incorrect username', ()=> {
    //     cy.visit ('http://localhost:8080/')
    //     cy.get('[placeholder="Enter Username"]').type('dummytre')
    //     cy.get('[placeholder="password"]').type('test1')
    //     cy.get('.sc-bZQynM').click()
    //     how to display ('Incorrect username or bad password')?
    // })

    // it('Check login with incorrect password', ()=> {
    //     cy.visit ('http://localhost:8080/')
    //     cy.get('[placeholder="Enter Username"]').type('dummytree')
    //     cy.get('[placeholder="password"]').type('test')
    //     cy.get('.sc-bZQynM').click()
    //      how to display message ('Incorrect username or bad password')?
    // })

    // To check if the password is masked while entering
    // it('Check if password is masked while entering', ()=> {
    //     cy.visit ('http://localhost:8080/')
    //     cy.get('[placeholder="password"]').type('test1')
    //     .contains ('*****') 

    // })


})
