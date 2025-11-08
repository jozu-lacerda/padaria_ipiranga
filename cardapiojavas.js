let carrinho = [];
let totalCarrinho = 0;

const container = document.querySelector(".carrinho-container");
const totalSpan = document.getElementById("totalCarrinho");

// Adicionar produto ao carrinho
document.querySelectorAll(".comprar").forEach(btn => {
  btn.addEventListener("click", () => {
    const produto = btn.dataset.produto;
    const preco = parseFloat(btn.dataset.preco);

    const itemExistente = carrinho.find(item => item.produto === produto);

    if (itemExistente) {
      itemExistente.quantidade += 1;
      itemExistente.subtotal = itemExistente.quantidade * preco;
    } else {
      carrinho.push({
        produto: produto,
        preco: preco,
        quantidade: 1,
        subtotal: preco
      });
    }

    atualizarCarrinho();
  });
});

function atualizarCarrinho() {
  container.innerHTML = "";
  totalCarrinho = 0;

  carrinho.forEach(item => {
    totalCarrinho += item.subtotal;

    const div = document.createElement("div");
    div.className = "carrinho-item";
    div.innerHTML = `
      <h4>${item.produto}</h4>
      <p>Preço Unitário: R$ ${item.preco.toFixed(2)}</p>
      <p>Quantidade: ${item.quantidade}</p>
      <p>Total: R$ ${item.subtotal.toFixed(2)}</p>
    `;
    container.appendChild(div);
  });

  totalSpan.textContent = totalCarrinho.toFixed(2);
}

// Limpar carrinho
document.getElementById("removerTodos").addEventListener("click", () => {
  carrinho = [];
  totalCarrinho = 0;
  container.innerHTML = "";
  totalSpan.textContent = "0.00";
});

// Enviar pedido via WhatsApp e abrir Feedback
document.getElementById("enviar-pedido").addEventListener("click", () => {
  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
    return;
  }

  let mensagem = "🛍️ *Novo Pedido - PADOCA*\n\n";

  carrinho.forEach((item, index) => {
    mensagem += `${index + 1}. ${item.produto} (${item.quantidade}x) - R$ ${item.subtotal.toFixed(2)}\n`;
  });

  mensagem += `\n💰 *Total Geral:* R$ ${totalCarrinho.toFixed(2)}\n\n`;
  mensagem += "Por favor, confirme meu pedido 😊";

  const numero = "5511912475226";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  // Abre o WhatsApp em nova aba
  window.open(url, "_blank");

  // Após 3 segundos, abre o formulário de feedback em nova aba (_blank)
  setTimeout(() => {
    window.open("/1formulario.html", "_blank");
  }, 3000);

  // Limpa o carrinho visualmente
  carrinho = [];
  totalCarrinho = 0;
  container.innerHTML = "";
  totalSpan.textContent = "0.00";
});
