jest.mock('../../../api/rotas/fornecedores/tabelaFornecedor')
const Fornecedor = require('../../../api/rotas/fornecedores/fornecedor')

describe('classe Fornecedor', () => {
  test('O método validar() retorna true!', () =>{
    const fornecedor = new Fornecedor({
      empresa:'Gatito',
      email:'contato@gatito.com.br',
      categoria: 'brinquedos'
    })

    expect(fornecedor.validar()).toBe(true)
  })

  test('O método criar() foi criado com sucesso!', async() => {
    const fornecedor = new Fornecedor({
      empresa:'Gatito',
      email:'contato@gatito.com.br',
      categoria: 'brinquedos'
    })

    await fornecedor.criar()

    expect(fornecedor.id).toBe(500)
    expect(fornecedor.dataCriacao).toBe('10/12/3420')
    expect(fornecedor.dataAtualizacao).toBe('10/12/3420')
    expect(fornecedor.versao).toBe(90)
  })

})