/*
  OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto 
  e mostrar o cartão correspondente ao que foi selecionado na listagem
      PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
      PASSO 2 - Identificar o evento de clique no elemento da listagem
      PASSO 3 - remover a classe aberto só do cartão que tá aberto
      PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual 
   cartão abrir
      PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
      PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
*/


// PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
const listaSelecaoToons = document.querySelectorAll(".toon");

// PASSO 2 - Identificar o evento de clique no elemento da listagem~
listaSelecaoToons.forEach(toon => {
   toon.addEventListener("click", () => {
      // // PASSO 3 - remover a classe aberto só do cartão que tá aberto
      esconderCartaoToon();
      // PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir
      const idToonSelecionado = mostrarCartaoToonSelecionado(toon);

      // PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
      desativarToonNaListagem();

      // PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
      ativarToonSelecionadoNaListagem(idToonSelecionado);
   })
});



function ativarToonSelecionadoNaListagem(idToonSelecionado) {
   const toonSelecionadoNaListagem = document.getElementById(idToonSelecionado);
   toonSelecionadoNaListagem.classList.add("ativo");
}

function desativarToonNaListagem() {
   const toonAtivoNaListagem = document.querySelector(".ativo");
   toonAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoToonSelecionado(toon) {
   const idToonSelecionado = toon.attributes.id.value;
   const idDoCartaoToonParaAbrir = "cartao-" + idToonSelecionado;
   const cartaoToonParaAbrir = document.getElementById(idDoCartaoToonParaAbrir);
   cartaoToonParaAbrir.classList.add("aberto");
   return idToonSelecionado;
}

function esconderCartaoToon() {
   const cartaoToonAberto = document.querySelector(".aberto");
   cartaoToonAberto.classList.remove("aberto");
}

