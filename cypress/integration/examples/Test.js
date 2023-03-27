/// <reference types="Cypress" />
import Signup from "../TestFiles/Signup.js"

describe('My Test Suite', function() 
{
 
    it('My Test case',function() 
    {
        const signupObj = new Signup() 
        cy.visit("http://automationexercise.com/")
    
        signupObj.getSignupLogin().click()
        signupObj.getSignupText().should('have.text','New User Signup!')
        signupObj.getName().type('Afaq Zahoor')
        signupObj.getEmail().type('afaq.zahoor@devsinc.com')
        signupObj.getSignupButton().click()
        //signupObj.getNameText().should('have.text','Afaq Zahoor')
        //signupObj.getEmailTest().should('have.text','afaq.zahoor@devsinc.com')
        signupObj.getTitle().click()
        signupObj.getPassword().type('testing123')
        signupObj.getDay().select('28')
        signupObj.getMonth().select('June')
        signupObj.getYear().select('1998')
        signupObj.getNewsletter().click()
        signupObj.getSpecialOffers().click()
        signupObj.getFirstName().type('Afaq')
        signupObj.getLastName().type('Zahoor')
        signupObj.getCompany().type('Devsinc')
        signupObj.getAddress().type('123, DHA Devsinc Tower, Lahore')
        signupObj.getCountry().select('India')
        signupObj.getState().type('Test State')
        signupObj.getCity().type('Test City')
        signupObj.getZip().type('12345')
        signupObj.getMobileNo().type('12345678910')
        signupObj.getCreateAcc().click()
        signupObj.getAccountCreatedText().should('have,text','ACCOUNT CREATED!')

        
        //signupObj.getCreateFreeAccount().click().should('have.text','Create free account')
        //cy.url().should('include','/index.html')

    })

})