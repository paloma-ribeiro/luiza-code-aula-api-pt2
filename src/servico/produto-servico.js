const validarProduto = (produto) => {

}

const inserirProdutoNoServico = (produto) => {
    const produtoParaOBanco = validarProduto(produto)
    inserirProdutoNoBanco(produtoParaOBanco)
    return produtoParaOBanco
} 