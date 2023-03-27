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
export default Signup;