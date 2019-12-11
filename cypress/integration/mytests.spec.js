describe('My first Test Suite...', () => {
    

    it("Vists my Appp", () => {
        cy.visit("http://localhost:3000/");
        // cy.wait(5000);
    });




    it('cy.title() - get the title', () => {
        // https://on.cypress.io/title
        cy.title().should('match', /React App/);
      })




    it("Check Button Disabled", () => {
          cy.get(".todo-submit").should("have.attr", "disabled");
          cy.xpath('//*[@id="root"]/div/div[1]/form/input').type("hello world!!!");
          cy.get(".todo-submit").should("not.have.attr", "disabled");
    })



    it("Check List length, should be zero ", () => {

            cy.xpath('//*[@id="root"]/div/div[2]/ul').find("li").should("have.length", 0);
            cy.get(".todo-submit").click();
            cy.xpath('//*[@id="root"]/div/div[2]/ul').find("li").should("have.length", 1);
            cy.xpath('//*[@id="root"]/div/div[1]/form/input').should("have.value", "");


            cy.xpath('//*[@id="root"]/div/div[1]/form/input').type("Number 2");
            cy.get(".todo-submit").click();
            cy.xpath('//*[@id="root"]/div/div[2]/ul').find("li").should("have.length", 2);
            cy.xpath('//*[@id="root"]/div/div[1]/form/input').should("have.value", "");


            cy.xpath('//*[@id="root"]/div/div[1]/form/input').type("Number 3");
            cy.get(".todo-submit").click();
            cy.xpath('//*[@id="root"]/div/div[2]/ul').find("li").should("have.length", 3);
            cy.xpath('//*[@id="root"]/div/div[1]/form/input').should("have.value", "");
      })



      it("DELETING THE ITEMS...", () => {
        cy.xpath('//*[@id="root"]/div/div[2]/ul').find("li").each(($el,index,$list) => {
            cy.get($list[index]).find("button").click();
            cy.wait(1000);

        });

        cy.get(`[id="my-list"]`).children().should("have.length", 0);

      })

})
