const dado = document.querySelector('.dado');
const botao = document.getElementById('rolarDado');
 
// Função para gerar uma rotação aleatória
function rolarDado() {
  const numero = Math.floor(Math.random() * 10) + 1;
  let x, y;
  switch (numero) {
    case 1: x = 0; y = 0; break;
    case 2: x = 0; y = 36; break;
    case 3: x = 0; y = 72; break;
    case 4: x = 0; y = 108; break;
    case 5: x = 0; y = 144; break;
    case 6: x = 0; y = 180; break;
    case 7: x = 0; y = 216; break;
    case 8: x = 0; y = 252; break;
    case 9: x = 0; y = 288; break;
    case 10: x = 0; y = 324; break;
    case 11: x = 0; y = 0; break;
    case 12: x = 0; y = 36; break;
    case 13: x = 0; y = 72; break;
    case 14: x = 0; y = 108; break;
    case 15: x = 0; y = 144; break;
    case 16: x = 0; y = 180; break;
    case 17: x = 0; y = 216; break;
    case 18: x = 0; y = 252; break;
    case 19: x = 0; y = 288; break;
    case 20: x = 0; y = 324; break;
  }
 
  dado.style.transform = `rotateY(${y}deg)`;
}
 
botao.addEventListener('click', rolarDado);