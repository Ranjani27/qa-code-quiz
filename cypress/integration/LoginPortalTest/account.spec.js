/// <reference types="Cypress" />

//verify if account page attributes exist.

describe('Verify user detail page without details', ()=> {
    beforeEach(()=>{
        cy.visit ('http://localhost:8080/')
        .get('[placeholder="Enter Username"]').type('SomeUser_name')
        .get('[placeholder="password"]').type('TopSecret1234!')
        .get('.sc-bZQynM').click()
        
    }) 

//Verify if the account page attribute values exist for each field
    it('6. Check user name exists', ()=> {
       cy.get('.sc-bwzfXH > :nth-child(1) > :nth-child(2)').contains('SomeName');
       
    })

    it('7. Check users favourite fruit does not exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(2) > :nth-child(2)').contains('some fruit');
    })    
        
    it('8. Check users favourite movie does not exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(3) > :nth-child(2)').contains('The Room');//how to mention it as blank
    }) 

    it('10. Check users favourite number exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(4) > :nth-child(2)').contains('BN<1234>');
    })     

    it('11. Check logout button exists', () => {
        cy.get('.sc-bxivhb').should('exist');
    })    
    
    it('12. Check click on logout button redirects to the login page', () => {
        cy.visit('http://localhost:8080/')
    })    
    
})
//verify user details page without all the details
describe('Verify user detail page without user details', ()=> {
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

//Verify if the account page attribute values exist for each field
    it('6. Check Hello undefined should not exists', ()=> {
        cy.get('.sc-bdVaJa > div').should('not.contain','Hello undefined');
       
    })

    it('7. Check users favourite fruit does not exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(2) > :nth-child(2)').should('be.empty');
    })    
        
    it('8. Check users favourite movie does not exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(3) > :nth-child(2)').should('be.empty');//how to mention it as blank
    }) 

    it('10. Check users favourite number exists', ()=> {
        cy.get('.sc-bwzfXH > :nth-child(4) > :nth-child(2)').should('be.empty');
    })     

    it('11. Check logout button exists', () => {
        cy.get('.sc-bxivhb').should('exist');
    })    
    
    it('12. Check click on logout button redirects to the login page', () => {
        cy.visit('http://localhost:8080/')
    })    
    
})

//Verify header if no name value is available for a user.
it('test the behaviour of user accounts if no name exist', ()=> {
    cy.visit ('http://localhost:8080/')
    .get('[placeholder="Enter Username"]').type('dummytree')
    .get('[placeholder="password"]').type('test1')
    .get('.sc-bZQynM').click()

}) 

// verify a user with all value exist.        


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



