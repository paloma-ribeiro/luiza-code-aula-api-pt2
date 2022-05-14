const { FaltaCampoExcecao } = require('../utils/excecao')

const validarProduto = (produto) => {

    if (!produto.codigo) {
        throw new FaltaCampoExcecao('codigo')
    }

    if (!produto.nome) {
        throw new FaltaCampoExcecao('nome')
    }

}

const inserirProdutoNoServico = (produto) => {
    const produtoParaOBanco = validarProduto(produto)
    inserirProdutoNoBanco(produtoParaOBanco)
    return produtoParaOBanco
} 

module.exports = {
    inserirProdutoNoServico
}