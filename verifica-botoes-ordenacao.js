describe('Todo list ME', () => {
    it('Deve criar uma nova lista', () => {
        cy.visit('/')//verifica se a visita a pagina esta ok

        cy.get('img[id="addlist"]').click()
        cy.get('input[id="updatebox"]').type('Teste')
        cy.get('input[id="updatebox"]').should('to.have.value', 'Teste')
        cy.get('input[type="submit"]').click()
        cy.contains('Teste').should('to.have.length', 1)
    })

    it('Deve digitar uma nova tarefa na lista Teste', () => {
        cy.get('[id=newtodo]').type('E{enter}')//insere E como tarefa na lista
        cy.contains('E').should('to.have.length', 1)//verifica se foi digitado a Tarefa E na lista de teste
        cy.get('[id=newtodo]').type('D{enter}')//insere D como tarefa na lista
        cy.contains('D').should('to.have.length', 1)//verifica se foi digitado a Tarefa D na lista de teste
        cy.get('[id=newtodo]').type('C{enter}')//insere C como tarefa na lista
        cy.contains('C').should('to.have.length', 1)//verifica se foi digitado a Tarefa C na lista de teste
        cy.get('[id=newtodo]').type('B{enter}')//insere B como tarefa na lista
        cy.contains('B').should('to.have.length', 1)//verifica se foi digitado a Tarefa B na lista de teste        
        cy.get('[id=newtodo]').type('A{enter}')//insere A como tarefa na lista
        cy.contains('A').should('to.have.length', 1)//verifica se foi digitado a Tarefa A na lista de teste
        cy.get('[data-todoid]').should('to.have.length', 5)//verifica se o tamanho da lista é 5
    })

    it('Verifica botoes de ordenacao', () => {
        cy.get('div[id="sortselect"]').children('[id="sort1"]').click()//ordenação alfabetica
        cy.wait(1500)
        cy.get('ul[id="mytodos"].ui-sortable > li').should(($lis) =>{
            expect($lis).to.have.length(5)
            expect($lis.eq(0)).to.contain('A')
            expect($lis.eq(1)).to.contain('B')
            expect($lis.eq(2)).to.contain('C')
            expect($lis.eq(3)).to.contain('D')  
            expect($lis.eq(4)).to.contain('E')        
        })
        cy.get('img[id="sortbutton"]').get('[id="sort0"]').click()//ordenação normal
        cy.wait(1500)
        cy.get('ul[id="mytodos"].ui-sortable > li').should(($lis) =>{
            expect($lis).to.have.length(5)
            expect($lis.eq(0)).to.contain('E')
            expect($lis.eq(1)).to.contain('D')
            expect($lis.eq(2)).to.contain('C')
            expect($lis.eq(3)).to.contain('B')
            expect($lis.eq(4)).to.contain('A')        
        })
        cy.get('img[id="sortbutton"]').get('[id="sort2"]').click()//ordenação randomica
        cy.wait(1500)
        cy.get('ul[id="mytodos"].ui-sortable > li').should(($lis) =>{
            expect($lis).to.have.length(5)   
        })
        cy.get('img[id="sortbutton"]').get('[id="sort3"]').click()//Top-3 
        cy.wait(1500)
        cy.get('ul[id="mytodos"].ui-sortable').children('li').should('have.class', 'moveabletodo itemdimmed ui-sortable-handle')

    })
})