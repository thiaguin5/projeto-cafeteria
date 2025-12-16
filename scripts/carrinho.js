// Função para obter o carrinho do localStorage
function getCarrinho() {
    return JSON.parse(localStorage.getItem('carrinho')) || [];
}

// Função para salvar o carrinho no localStorage
function setCarrinho(carrinho) {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Renderiza os itens do carrinho na tela
function renderCarrinho() {
    const lista = document.getElementById('lista-carrinho');
    const totalElem = document.getElementById('total');
    const carrinho = getCarrinho();

    lista.innerHTML = '';
    let total = 0;

    if (carrinho.length === 0) {
        lista.innerHTML = '<li>Carrinho vazio!</li>';
        totalElem.textContent = '';
        return;
    }

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.produto} - R$ ${parseFloat(item.preco).toFixed(2)}`;
        lista.appendChild(li);
        total += parseFloat(item.preco);
    });

    totalElem.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Evento do botão Comprar
document.getElementById('btn-comprar').addEventListener('click', function() {
    const carrinho = getCarrinho();
    if (carrinho.length === 0) {
        alert('Carrinho vazio!');
        return;
    }
    let lista = carrinho.map(item => `${item.produto} - R$ ${parseFloat(item.preco).toFixed(2)}`).join('\n');
    let total = carrinho.reduce((acc, item) => acc + parseFloat(item.preco), 0);
    alert(`Resumo da compra:\n${lista}\n\nTotal: R$ ${total.toFixed(2)}`);
});

// Evento do botão Limpar Carrinho
document.getElementById('btn-limpar-carrinho').addEventListener('click', function() {
    if (confirm('Tem certeza que deseja limpar o carrinho?')) {
        setCarrinho([]);
        renderCarrinho();
    }
});

// Inicializa a tela do carrinho
renderCarrinho();

/*http://127.0.0.1:5500/indexhtml/carrinho.html*/