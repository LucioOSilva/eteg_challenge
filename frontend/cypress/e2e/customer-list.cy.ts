describe('Lista de clientes', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('deve renderizar o header com o título correto', () => {
    cy.contains('Cadastro de cliente').should('be.visible');
  });

  it('deve exibir o botão de adicionar cliente', () => {
    cy.contains('Adicionar cliente').should('be.visible');
  });

  it('deve exibir o contador de clientes cadastrados', () => {
    cy.contains('clientes cadastrados').should('be.visible');
  });

  it('deve renderizar a lista de clientes ou o empty state', () => {
    cy.get('body').then(($body) => {
      if ($body.text().includes('Nenhum cliente cadastrado')) {
        cy.contains('Nenhum cliente cadastrado ainda.').should('be.visible');
      } else {
        cy.get('article').should('have.length.greaterThan', 0);
      }
    });
  });

  it('deve exibir os dados do cliente no card', () => {
    cy.get('article').first().within(() => {
      cy.contains('CPF').should('be.visible');
      cy.contains('Email').should('be.visible');
      cy.contains('Cor favorita').should('be.visible');
      cy.contains('Cadastrado em').should('be.visible');
    });
  });
});