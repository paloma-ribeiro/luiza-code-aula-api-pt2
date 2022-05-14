const httpStatus = require('http-status')

const inserirProdutoNoControlador = (req, res) => {
    const produto = req.body
    // Serviço realiza a inserção
    return res.status(httpStatus.CREATED).json({
        codigo: produto.codigo
    })
} 

module.exports = (appExpress) => {
    const rotaPadrao = '/api/produtos'

    appExpress.post(rotaPadrao, inserirProdutoNoControlador)
}