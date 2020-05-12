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
        cy.get('[id=newtodo]').type('Tarefa-1{enter}')//insere nova tarefa na lista
        cy.contains('Tarefa-1').should('to.have.length', 1)//verifica se foi digitado a Tarefa-1 na lista de teste
        cy.get('[id=newtodo]').type('Tarefa-2{enter}')//insere nova tarefa na lista
        cy.contains('Tarefa-2').should('to.have.length', 1)//verifica se foi digitado a Tarefa-1 na lista de teste
        cy.get('[id=newtodo]').type('Tarefa-3{enter}')//insere nova tarefa na lista
        cy.contains('Tarefa-3').should('to.have.length', 1)//verifica se foi digitado a Tarefa-1 na lista de teste
        cy.get('[data-todoid]').should('to.have.length', 3)//verifica se o tamanho da lista é 3
    })

    it('Deve concluir a tarefa-2 e tarefa-3 da lista Teste', () => {
        cy.get('li[id="todo_1"]').children('input[type=checkbox]').check({force: true})
        cy.get('ul[id="mytodos"]').get('[type=checkbox]:eq(2)').check({force: true})
        cy.wait(1500)
        cy.get('ul[id="mydonetodos"].ui-sortable > li').should(($lis) =>{
            expect($lis).to.have.length(2)
            expect($lis.eq(0)).to.contain('Tarefa-3')
            expect($lis.eq(1)).to.contain('Tarefa-2')    
        })
    })

    it('Deve excluir todas as tarefas concluidas', () => {
        cy.get('[class="purge"]').click()
        cy.get('ul[id="mydonetodos"].ui-sortable > li').should('have.length', 0)
    })

    it('Verificacao da acao', () => {
        cy.get('[data-todoid]').should('to.have.length', 1)
        cy.contains('Tarefa-1').should('to.have.length', 1)
    })

})