
const BotaoMostraPalavras = document.querySelector('#botao-palavrachave');

BotaoMostraPalavras.addEventListener('click', MostraPalavrasChave);

function MostraPalavrasChave(){
   const texto = document.querySelector('#entrada-de-texto').value;
   const campoResultado = document.querySelector('#resultado-palavrachave');
   const palavras = texto.split(" ")
   campoResultado.textContent = palavras.loin(", ");
}