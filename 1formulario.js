document.addEventListener("DOMContentLoaded", () => {
  const numeroLoja = "5511912475226"; // número WhatsApp da loja
  const formFeedback = document.getElementById("form-feedback");
  const popup = document.getElementById("popup");
  const popupClose = document.getElementById("popup-close");

  // Fecha popup manualmente
  popupClose.addEventListener("click", () => {
    popup.classList.add("hidden");
    window.location.href = "@cardapio.html"; // 🔁 redireciona após clicar em "Fechar"
  });

  // Submissão do formulário
  formFeedback.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome-feedback").value.trim();
    const email = document.getElementById("email-feedback").value.trim();
    const telefone = document.getElementById("telefone-feedback").value.trim();
    const produtoServico = document.getElementById("select").value;
    const avaliacao = document.querySelector("input[name='avaliacao']:checked")?.value;
    const comentarios = document.getElementById("comentarios").value.trim();
    const recomendaria = document.querySelectorAll(".termos input[type='checkbox']")[0].checked ? "Sim" : "Não";
    const autoriza = document.querySelectorAll(".termos input[type='checkbox']")[1].checked ? "Sim" : "Não";

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

    // Abre WhatsApp em nova aba
    window.open(url, "_blank");

    // Mostra pop-up
    popup.classList.remove("hidden");
    formFeedback.reset();

    /* 
      🔁 OPÇÃO 1: redirecionamento automático após 3 segundos.
      (descomente as 3 linhas abaixo se quiser automático)
    */
    // setTimeout(() => {
    //   window.location.href = "index.html";
    // }, 3000);
  });
});
