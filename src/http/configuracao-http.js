/*
Arquivo responsável pelas configurações do Express/Http
*/
const express = require('express')

/**
 * Principal função para configurar o servidor HTTP.
 * @param {*} app App do express
 */

const configurarServidorHttp = (app) => {
    app.use(express.json())
}

module.exports = {
    configurarServidorHttp
}