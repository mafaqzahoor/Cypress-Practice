class Signup
{
    getSignupLogin()
    {
        return cy.get('.shop-menu > .nav > :nth-child(4) > a')
    }
    getSignupText()
    {
        return cy.get('.signup-form > h2')
    }
    getName()
    {
        return cy.get('[data-qa="signup-name"]')
    }
    getEmail()
    {
        return cy.get('[data-qa="signup-email"]')
    }
    getSignupButton()
    {
        return cy.get('[data-qa="signup-button"]')
    }
    getNameText()
    {
        return cy.get('[data-qa="name"]')
    }
    getEmailTest()
    {
        return cy.get('[data-qa="email"]')
    }
    getTitle()
    {
        return cy.get('#id_gender1')
    }
    getPassword()
    {
        return cy.get('[data-qa="password"]')
    }
    getDay()
    {
        return cy.get('[data-qa="days"]')
    }
    getMonth()
    {
        return cy.get('[data-qa="months"]')
    }
    getYear()
    {
        return cy.get('[data-qa="years"]')
    }
    getNewsletter()
    {
        return cy.get('#newsletter')
    }
    getSpecialOffers()
    {
        return cy.get('#optin')
    }
    getFirstName()
    {
        return cy.get('[data-qa="first_name"]')
    }
    getLastName()
    {
        return cy.get('[data-qa="last_name"]')
    }
    getCompany()
    {
        return cy.get('[data-qa="company"]')
    }
    getAddress()
    {
        return cy.get('[data-qa="address"]')
    }
    getCountry()
    {
        return cy.get('[data-qa="country"]')
    }
    getState()
    {
        return cy.get('[data-qa="state"]')
    }
    getCity()
    {
        return cy.get('[data-qa="city"]')
    }
    getZip()
    {
        return cy.get('[data-qa="zipcode"]')
    }
    getMobileNo()
    {
        return cy.get('[data-qa="mobile_number"]')
    }
    getCreateAcc()
    {
        return cy.get('[data-qa="create-account"]')
    }
    getAccountCreatedText()
    {
        return cy.get('b')
    }
}
class Login
{
    getSignupLogin()
    {
        return cy.get('.shop-menu > .nav > :nth-child(4) > a')
    }
    getLoginText()
    {
        return cy.get('.login-form > h2')
    }
    getLoginEmail()
    {
        return cy.get('[data-qa="login-email"]')
    }
    getLoginPassword()
    {
        return cy.get('[data-qa="login-password"]')
    }
    getLoginButton()
    {
        return cy.get('[data-qa="login-button"]')
    }
    getIncorrectText()
    {
        return cy.get('.login-form > form > p')
    }
    getLogoutButton()
    {
        return cy.get('.shop-menu > .nav > :nth-child(4) > a')
    }
}
class Contact_Us
{
    getContactUs()
    {
        return cy.get('.shop-menu > .nav > :nth-child(8) > a')
    }
    getContactUsText()
    {
        return cy.get('div.contact-form > .title')
    }
    getName()
    {
        return cy.get('[data-qa="name"]')
    }
    getEmail()
    {
        return cy.get('[data-qa="email"]')
    }
    getSubject()
    {
        return cy.get('[data-qa="subject"]')
    }
    getMessage()
    {
        return cy.get('[data-qa="message"]')
    }
    getChooseFile()
    {
        return cy.get(':nth-child(6) > .form-control')
    }
    getUploadFile()
    {
        return cy.fixture('Test-Logo.png').then((fileContent) => {
            cy.get(':nth-child(6) > .form-control').selectFile({ fileContent, fileName: 'Test-Logo.png', mimeType: 'image/png' });
          });
    }
    getSubmitButton()
    {
        return cy.get('[data-qa="submit-button"]')
    }
    getSuccessText()
    {
        return cy.get('.status')
    }
    getHomeButton()
    {
        return cy.get('#form-section > .btn')
    }
}
export {Signup, Login, Contact_Us}