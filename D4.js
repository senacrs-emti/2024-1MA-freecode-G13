const dado = document.querySelector('.dado');
const botao = document.getElementById('rolarDado');
 
// Função para gerar uma rotação aleatória
function rolarDado() {
  const numero = Math.floor(Math.random() * 4) + 1;
  let x, y;
  switch (numero) {
    case 1: x = 0; y = 0; break;
    case 2: x = 0; y = 180; break;
    case 3: x = 0; y = -90; break;
    case 4: x = 0; y = 90; break;
  }
 
  dado.style.transform = `rotateY(${y}deg)`;
}
 
botao.addEventListener('click', rolarDado);