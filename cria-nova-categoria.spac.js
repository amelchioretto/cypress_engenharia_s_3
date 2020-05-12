describe('Todo list ME', () => {
    it('Deve criar uma nova categoria', () => {
        cy.visit('/')//verifica se a visita a pagina esta ok

        cy.get('img[id="adddivider"]').click()
        cy.get('input[id="updatebox"]').type('Nova categoria')
        cy.get('input[id="updatebox"]').should('to.have.value', 'Nova categoria')
        cy.get('input[type="submit"]').click()
        cy.contains('Nova categoria').should('to.have.length', 1)
    })

    it('Deve deletar a categoria criada', () => {
        cy.get('[id="category_1"]').children('[src="./images/delete.gif"]').click({force: true})
        cy.contains('Nova categoria').should('to.have.length', 0)
    })
})