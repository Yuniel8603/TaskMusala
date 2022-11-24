describe("Suite test Musala",function(){

    beforeEach(function(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;})
    
        cy.visit('/')

    })
    it('case1',function(){
        cy.get('#wt-cli-accept-all-btn').click();
        cy.get('.contact-label').click();
        
        cy.fixture('elements').then((elements)=>{
            cy.get (elements.nombre).type('Yuniel');
            cy.get (elements.correo).type('prueba@prueba');
            cy.get (elements.movil).type('54830946');
            cy.get (elements.asunto).type('prueba');
            cy.get (elements.mensaje).type('activo el captcha');
            cy.get (elements.codigo).type('mjrt86');
            cy.get (elements.boton).click({force:true});
            cy.get('p > .wpcf7-form-control').invoke('text').then((text) => {
               expect('Uno o más campos tienen un error.Por favor revisa e intenta de nuevo.').equal('Uno o más campos tienen un error.Por favor revisa e intenta de nuevo.')
                
               
                });
        
                          
        });
    

    })
    it ('case2',function(){
        cy.get('#menu > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)').click();
        cy.url().should('eq', 'https://www.musala.com/company/')
        cy.get('.company-members').children('.cm-content').should('contain', 'Leadership');
        cy.get('.musala-icon-facebook').click({force: true});
        cy.url().should('eq', 'https://www.facebook.com/MusalaSoft?fref=ts');
        

    })

    it('case3',function(){

        cy.get('#menu > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)').click(); 
        cy.get('.contact-label-code').click(); 
        cy.url().should('eq', 'https://www.musala.com/careers/join-us/');
        cy.get('#menu > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)').click();         
        cy.get('#get_location').select('#get_location > option:nth-child(2)').click();
        cy.get('article.card-jobsHot:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > img:nth-child(1)').click();
        cy.url().should('eq', 'https://www.musala.com/job/senior-ui-ux-designer/');
        cy.contains('.square-requirements').children('.div.joinus-content:nth-child(1) > div:nth-child(1) > div:nth-child(2)').should('contain', 'General description');
        cy.contains('.square-requirements').children('div.joinus-content:nth-child(1) > div:nth-child(2) > div:nth-child(2)').should('contain', 'Requirements');
        cy.contains('.square-requirements').children('div.joinus-content:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1)').should('contain', 'Responsibilities');
        cy.contains('.square-requirements').children('div.joinus-content:nth-child(2) > div:nth-child(2) > div:nth-child(2) > h2:nth-child(1))').should('contain', 'What we offer');
        cy.contains('.btn-join-us').click();
        cy.fixture('elements').then((elements)=>{
            cy.get (elements.nombre).type('').should('contain','The field is required.');
            cy.get (elements.correo).type('prueba@prueba').should('contains','The e-mail address entered is invalid.');
            cy.get (elements.movil).type('54830946');
            
            const fileName = "Curriculum prueba.pdf";
            const fileType = "application/pdf";
            const selector = "#uploadtextfield";
        
            uploadFile(selector, fileName, fileType);
            cy.get("#uploadtextfield").click();
            cy.get("##uploadtextfield").contains("Curriculum prueba");
            cy.get('#cf-5').type("Yuniel");
            cy.get('#cf-6').type('Prueba');
            cy.get('#adConsentChx [type="checkbox"]').not('[disabled]').check().should('be.checked');
            cy.get('.has-spinner').click();




        
    })

    it('case4',function(){
        cy.get('#menu > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)').click(); 
        cy.get('.contact-label-code').click(); 
        cy.url().should('eq', 'https://www.musala.com/careers/join-us/');
        cy.get('#menu > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)').click();         
        cy.get('#get_location').select('#get_location > option:nth-child(4)').click();  

        
    })

})});