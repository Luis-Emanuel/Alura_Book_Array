const btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco") 
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco(){
    let livrosOrdenados = livros.sort((a, b) => b.preco - a.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}