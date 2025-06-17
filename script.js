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