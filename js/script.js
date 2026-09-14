document.addEventListener("DOMContentLoaded", function () {
  // 1. Funcao Temporal: Saudacao conforme o horario do dia
  const elementoSaudacao = document.getElementById("saudacao-tempo");
  if (elementoSaudacao) {
    const horas = new Date().getHours();
    let texto = "Bem-vindo(a) ao PetShop Amigo Fiel!";
    if (horas >= 5 && horas < 12)
      texto = "Bom dia! Bem-vindo(a) ao PetShop Amigo Fiel!";
    else if (horas >= 12 && horas < 18)
      texto = "Boa tarde! Bem-vindo(a) ao PetShop Amigo Fiel!";
    else texto = "Boa noite! Bem-vindo(a) ao PetShop Amigo Fiel!";
    elementoSaudacao.textContent = texto;
  }

  // 2. Validacao simples do Agendamento
  const formAgendamento = document.getElementById("form-agendamento");
  if (formAgendamento) {
    formAgendamento.addEventListener("submit", function (e) {
      e.preventDefault();
      const banho = document.getElementById("servicoBanho").checked;
      const tosa = document.getElementById("servicoTosa").checked;
      if (!banho && !tosa) {
        alert(
          "Por favor, selecione ao menos um serviço (Banho ou Tosa).",
        );
        return;
      }
      alert("Agendamento realizado com sucesso!");
      formAgendamento.reset();
    });
  }

  // 3. Validacao simples do Cadastro
  const formCadastro = document.getElementById("form-cadastro");
  if (formCadastro) {
    formCadastro.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Cadastro de cliente e pet realizado com sucesso!");
      formCadastro.reset();
    });
  }
});
