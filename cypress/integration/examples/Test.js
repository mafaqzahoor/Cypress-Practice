/// <reference types="Cypress" />
import { Signup, Login, Contact_Us } from "../TestFiles/Signup.js"

describe('My Test Suite', function() 
{
 
//    it('Signup Testcases',function() 
//     {
//         const signupObj = new Signup() 
//         cy.visit("http://automationexercise.com/")
    
//         signupObj.getSignupLogin().click()
//         signupObj.getSignupText().should('have.text','New User Signup!')
//         signupObj.getName().type('Afaq Zahoor')
//         signupObj.getEmail().type('afaq.zahoor@devsinc.com')
//         signupObj.getSignupButton().click()
//         //signupObj.getNameText().should('have.text','Afaq Zahoor')
//         //signupObj.getEmailTest().should('have.text','afaq.zahoor@devsinc.com')
//         signupObj.getTitle().click()
//         signupObj.getPassword().type('testing123')
//         signupObj.getDay().select('28')
//         signupObj.getMonth().select('June')
//         signupObj.getYear().select('1998')
//         signupObj.getNewsletter().click()
//         signupObj.getSpecialOffers().click()
//         signupObj.getFirstName().type('Afaq')
//         signupObj.getLastName().type('Zahoor')
//         signupObj.getCompany().type('Devsinc')
//         signupObj.getAddress().type('123, DHA Devsinc Tower, Lahore')
//         signupObj.getCountry().select('India')
//         signupObj.getState().type('Test State')
//         signupObj.getCity().type('Test City')
//         signupObj.getZip().type('12345')
//         signupObj.getMobileNo().type('12345678910')
//         signupObj.getCreateAcc().click()
//         signupObj.getAccountCreatedText().should('have,text','ACCOUNT CREATED!')

//     })
    // it('Login Testcases',function()
    // {
    //     const loginObj = new Login() 
    //     cy.visit("http://automationexercise.com/")

    //     loginObj.getSignupLogin().click()
    //     loginObj.getLoginText().should('have.text','Login to your account')
    //     loginObj.getLoginEmail().type('afaq.zahoor@devsinc.com')
    //     loginObj.getLoginPassword().type('testing123')
    //     loginObj.getLoginButton().click()
    // })
    // it('Incorrect Login Testcases',function()
    // {
    //     const loginObj = new Login() 
    //     cy.visit("http://automationexercise.com/")

    //     loginObj.getSignupLogin().click()
    //     loginObj.getLoginText().should('have.text','Login to your account')
    //     loginObj.getLoginEmail().type('afaqzahoor@devsinc.com')
    //     loginObj.getLoginPassword().type('testing1234')
    //     loginObj.getLoginButton().click()
    //     loginObj.getIncorrectText().should('have.text','Your email or password is incorrect!')
    // })
    // it('Logout Testcases',function()
    // {
    //     const loginObj = new Login() 
    //     cy.visit("http://automationexercise.com/")

    //     loginObj.getSignupLogin().click()
    //     loginObj.getLoginText().should('have.text','Login to your account')
    //     loginObj.getLoginEmail().type('afaq.zahoor@devsinc.com')
    //     loginObj.getLoginPassword().type('testing123')
    //     loginObj.getLoginButton().click()
    //     loginObj.getLogoutButton().click()
    //     cy.url().should('include','https://automationexercise.com/login')
    // })
    it('Contact Us Testcases',function()
    {
        const contactObj = new Contact_Us() 
        cy.visit("http://automationexercise.com/")

        contactObj.getContactUs().click()
        contactObj.getContactUsText().should('have.text','Get In Touch')
        contactObj.getName().type('Afaq Zahoor')
        contactObj.getEmail().type('afaq.zahoor@devsinc.com')
        contactObj.getSubject().type('Testing Subject')
        contactObj.getMessage().type('Testing the body of the message.')
        contactObj.getChooseFile().click()
        contactObj.getUploadFile()
        contactObj.getSubmitButton().click()
        contactObj.getSuccessText().should('have.text','Success! Your details have been submitted successfully.')
        contactObj.getHomeButton().click()
        cy.url().should('contain','https://automationexercise.com/')
    })


})