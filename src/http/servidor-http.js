const express = require('express')
const configuracaoHttp = require('./configuracao-http')


// Função principal
const iniciarServidorHttp = () => {
    const app = express()
    configuracaoHttp.configurarServidorHttp(app)
    return app
}

const executarServidorHttp = (app, portaEscuta=3000) => {
    console.log('Servidor iniciado na porta', portaEscuta)
    app.listen(portaEscuta)
}

module.exports = {
    iniciarServidorHttp,
    executarServidorHttp
}