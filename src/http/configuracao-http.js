/*
Arquivo responsável pelas configurações do Express/Http
*/
const express = require('express')

const saudeControlador = require('../controlador/saude-controlador')

const configurarRotas = (app) => {
    saudeControlador(app)
}

/**
 * Principal função para configurar o servidor HTTP.
 * @param {*} app App do express
 */

const configurarServidorHttp = (app) => {
    app.use(express.json())
    configurarRotas(app)
}

module.exports = {
    configurarServidorHttp
}