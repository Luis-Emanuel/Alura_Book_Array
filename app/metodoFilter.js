const botoes = document.querySelectorAll(".btn");
botoes.forEach(botao => botao.addEventListener('click', filtrarLivros))

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
  exibirOsLivrosNaTela(livrosFiltrados);
  if(categoria == 'disponivel'){
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
    exibirValorTotalDosLivrosDispoveisNaTela(valorTotal)
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDispoveisNaTela(total) {
  elementoComValorTotalDeLivrosDiasponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${total.toFixed(2)}</span></p>
    </div>
  `
}