// Seleciona o display
const display = document.getElementById("display");
let expressao = ""; // Armazena a expressão matemática

// Adiciona eventos aos botões
document.querySelectorAll(".btn").forEach((botao) => {
  botao.addEventListener("click", () => {
    const valor = botao.getAttribute("data-value");

    // Botão de limpar tudo
    if (botao.id === "limpar") {
      expressao = "";
      atualizarDisplay("0");
      return;
    }

    // Botão de apagar último número
    if (botao.id === "apagar") {
      expressao = expressao.slice(0, -1);
      atualizarDisplay(expressao || "0");
      return;
    }

    // Botão de igual
    if (botao.id === "igual") {
      try {
        expressao = eval(expressao).toString(); // Calcula o resultado
        atualizarDisplay(expressao);
      } catch {
        atualizarDisplay("Erro"); // Trata erros
        expressao = "";
      }
      return;
    }

    // Adiciona o valor ao display
    expressao += valor;
    atualizarDisplay(expressao);
  });
});

// Atualiza o display
function atualizarDisplay(valor) {
  display.textContent = valor;
}
