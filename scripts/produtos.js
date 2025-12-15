function salvarCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function carregarCarrinho() {
  const salvo = localStorage.getItem('carrinho');
  return salvo ? JSON.parse(salvo) : [];
}

let carrinho = carregarCarrinho();

function atualizarCarrinho() {
  document.getElementById('qtd-carrinho').textContent = carrinho.length;
  salvarCarrinho();
}

// Adicionar produto
document.querySelectorAll('.btn-comprar').forEach(btn => {
  btn.addEventListener('click', function() {
    const produto = this.getAttribute('data-produto');
    const preco = parseFloat(this.getAttribute('data-preco'));
    carrinho.push({produto, preco});
    atualizarCarrinho();
    alert(produto + ' adicionado ao carrinho!');
  });
});

// Mostrar carrinho
document.getElementById('btn-carrinho').addEventListener('click', function() {
  if (carrinho.length === 0) {
    alert('Carrinho vazio!');
  } else {
    let lista = carrinho.map(item => `${item.produto} - R$ ${item.preco.toFixed(2)}`).join('\n');
    let total = carrinho.reduce((soma, item) => soma + item.preco, 0);
    alert('Itens no carrinho:\n' + lista + `\n\nTotal: R$ ${total.toFixed(2)}`);
  }
});

// Botão para limpar carrinho
document.getElementById('btn-limpar-carrinho').addEventListener('click', function() {
  carrinho = [];
  atualizarCarrinho();
  alert('Carrinho limpo!');
});
atualizarCarrinho();