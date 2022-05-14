const httpStatus = require('http-status')

const produtoServico = require('../servico/produto-servico')

const { FaltaCampoExcecao } = require('../utils/excecao')

const inserirProdutoNoControlador = (req, res) => {
    const produto = req.body
    try {
        produtoServico.inserirProdutoNoServico(produto)
    } catch (excecao) {
        if (excecao instanceof FaltaCampoExcecao) {
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
                mensagem: '' + excecao
            })
        }
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            mensagem: 'Entre em contato com o suporte'
        })
    }
    
    return res.status(httpStatus.CREATED).json({
        codigo: produto.codigo
    })
} 

module.exports = (appExpress) => {
    const rotaPadrao = '/api/produtos'

    appExpress.post(rotaPadrao, inserirProdutoNoControlador)
}