document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]");

  const showsSection = document.querySelector(".shows");
  const alturaShows = showsSection.clientHeight;

  //SCROLL HEAHER
  window.addEventListener("scroll", function () {
    const posicaoAtual = window.scrollY;
    const header = document.querySelector(".header");

    if (posicaoAtual < alturaShows) {
      header.style.backgroundColor = "transparent";
    } else {
      header.style.backgroundColor = "#eff0e6";
    }
  });

  //PROGRAMAÇÃO DAS ABAS
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (botao) {
      const abaAlvo = botao.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      escondeTodasAbas();
      aba.classList.add("shows__list--is-active");
      removeBotaoAtivo();
      botao.target.classList.add("shows__tabs__button--is-active");
    });
  }

  //SEÇÃO FAQ, ACCORDION
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", abreOuFechaResposta);
  }
});

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll("[data-tab-button]");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is-active");
  }
}

function escondeTodasAbas() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active");
  }
}

function abreOuFechaResposta(elemento) {
  const classe = "faq__questions__item--is-open";
  const elementoPai = elemento.target.parentNode;

  elementoPai.classList.toggle(classe);
}
