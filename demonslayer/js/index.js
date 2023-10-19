const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".personagem");

function tirarBotao() {
  const botaoSel = document.querySelector(".botao.selecionado");
  botaoSel.classList.remove("selecionado");
}

function tirarPersonagem() {
  const personagemSel = document.querySelector(".personagem.selecionado");
  personagemSel.classList.remove("selecionado");
}

botoes.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    tirarBotao();
    tirarPersonagem();

    botao.classList.add("selecionado");

    personagens[index].classList.add("selecionado");
  });
});
