describe('Api Testing', function() 
{
 
    it('GET List Users',function() 
     {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).as('getAllListOfUsers')
     }) 
     it('GET Single User',function() 
     {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/2"
        }).as('getAllListOfUsers')
     }) 
     it('GET Single User No Found',function() 
     {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/23"
        }).as('getAllListOfUsers')
     }) 
     it('GET LIST <RESOURCE>',function() 
     {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/unknown"
        }).as('getAllListOfUsers')
     })
     it('GET SINGLE <RESOURCE>',function() 
     {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/unknown/2"
        }).as('getAllListOfUsers')
     })
     it('GET SINGLE <RESOURCE> NOT FOUND',function() 
     {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/unknown/23"
        }).as('getAllListOfUsers')
     })

})