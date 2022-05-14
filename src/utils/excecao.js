class AplicacaoExcecao extends Error {

}

class FaltaCampoExcecao extends AplicacaoExcecao {
    // falta algum campo para determinado cadastro
    constructor(campoFaltante=null) {
        super(`Falta o campo ${campoFaltante}`)
        this.campoFaltante = campoFaltante
    }

}

module.exports = {
    FaltaCampoExcecao
}