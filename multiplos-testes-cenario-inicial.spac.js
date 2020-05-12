describe('Todo list ME', () => {
    //To Do list UI
    it('Verificacao titulo', () => {
        cy.visit('/')//verifica se a visita a pagina esta ok
        cy.get('h1').contains('span','Todo').should('to.have.length', 1) 
        cy.get('h1').contains('List').should('to.have.length', 1) 
        cy.get('h1').contains('span','Me').should('to.have.length', 1) 
    })
   
    //lista inicia com 7 elementos
    it('Devera adicionar nova tarefa', () => {
    
        cy.get('[id=newtodo]').type('Nova tarefa{enter}')//insere nova tarefa na lista
        
        cy.get('[data-todoid]').should('to.have.length', 8)   // verifica se a lista possui 8 elementos
        cy.contains('Nova tarefa').should('to.have.length', 1) //verifica se tem apenas uma tarefa com nome "nova tarefa"

    })

    it('Devera adicionar outra tarefa', () => {

        cy.get('[id=newtodo]').type('Outra tarefa{enter}')//insere outra tarefa na lista
        
        cy.get('[data-todoid]').should('to.have.length', 9)   // verifica se a lista possui 9 elementos
        cy.contains('Outra tarefa').should('to.have.length', 1) //verifica se tem apenas uma tarefa com nome "Outra tarefa"
    })

    it('Devera Concluir ultima tarefa', () => {
        cy.get('[type=checkbox]:eq(8)').check()
    })
      
    it('Devera desfazer a operação a conclusão da ultima tarefa', () => {
  
        cy.get('[type=checkbox]:eq(8)').check({force: true})//concluir utilma tarefa
        cy.get('[checked]').check({force: true}).click({force: true})//voltar a ultima tarefa para lista de façam
        
    })
    
})