document.addEventListener("DOMContentLoaded", () => {
  const numeroLoja = "5511912475226"; 
  const formFeedback = document.getElementById("form-feedback");
  const popup = document.getElementById("popup");
  const popupClose = document.getElementById("popup-close");

  // Fechar popup manualmente
  popupClose.addEventListener("click", () => {
    popup.classList.add("hidden");
    window.location.href = "https://jozu-lacerda.github.io/padaria_ipiranga/"; // ✅ volta à home real
  });

  formFeedback.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome-feedback").value.trim();
    const email = document.getElementById("email-feedback").value.trim();
    const telefone = document.getElementById("telefone-feedback").value.trim();
    const produtoServico = document.getElementById("select").value;
    const avaliacao = document.querySelector("input[name='avaliacao']:checked")?.value;
    const comentarios = document.getElementById("comentarios").value.trim();
    const recomendaria = document.getElementById("recomendaria").checked ? "Sim" : "Não";
    const autoriza = document.getElementById("autoriza").checked ? "Sim" : "Não";

    if (!avaliacao) {
      alert("⚠️ Selecione uma avaliação antes de enviar.");
      return;
    }

    let mensagemFeedback = `🗣️ *Novo Feedback Recebido*\n\n`;
    mensagemFeedback += `👤 *Nome:* ${nome}\n`;
    mensagemFeedback += `📧 *Email:* ${email}\n`;
    mensagemFeedback += `📱 *Telefone:* ${telefone}\n`;
    mensagemFeedback += `📦 *Produto/Serviço:* ${produtoServico}\n`;
    mensagemFeedback += `⭐ *Avaliação:* ${avaliacao}\n`;
    mensagemFeedback += `💬 *Comentários:* ${comentarios}\n`;
    mensagemFeedback += `👍 *Recomendaria:* ${recomendaria}\n`;
    mensagemFeedback += `📰 *Autoriza Publicação:* ${autoriza}`;

    const url = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(mensagemFeedback)}`;

    // Abre WhatsApp
    window.open(url, "_blank");

    // Mostra pop-up
    popup.classList.remove("hidden");

    // Limpa o formulário
    formFeedback.reset();

    // Redireciona automático após 3s
    setTimeout(() => {
      popup.classList.add("hidden");
      window.location.href = "https://jozu-lacerda.github.io/padaria_ipiranga/";
    }, 3000);
  });
});
// Código do carrinho de compras (cardapiojavas.js)