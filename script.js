document.getElementById("formProntuario").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const form = document.getElementById("formProntuario");
    
    // Verificar se o formulário é válido
    if (form.checkValidity()) {
      window.print(); // Abre a interface de impressão
    } else {
      alert("Por favor, preencha todos os campos obrigatórios!");
    }
  });
  
  // Adiciona feedback visual nos campos obrigatórios
  document.querySelectorAll("input[required], textarea[required]").forEach((field) => {
    field.addEventListener("input", () => {
      field.setCustomValidity("");
      if (!field.checkValidity()) {
        field.setCustomValidity("Este campo é obrigatório.");
      }
    });
  });

// Adiciona botões para leitura em voz alta das perguntas
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("label, h2, h3").forEach((el) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "\ud83d\udd0a"; // ícone de alto-falante
    btn.className = "audio-btn";
    btn.addEventListener("click", () => {
      speak(el.textContent.replace(/\s+/g, " ").trim());
    });
    el.appendChild(btn);
  });
});

function speak(text) {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Seu navegador n\u00e3o suporta s\u00edntese de fala.");
  }
}
