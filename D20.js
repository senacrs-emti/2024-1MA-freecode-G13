const dado = document.querySelector('.dado');
const botao = document.getElementById('rolarDado');
 
// Função para gerar uma rotação aleatória
function rolarDado() {
  const numero = Math.floor(Math.random() * 20) + 1;
  let x, y;
  switch (numero) {
    case 1: x = 14; y = -144; break;
    case 2: x = 14; y = 70; break;
    case 3: x = 14; y = -70; break;
    case 4: x = 14; y = 143; break;
    case 5: x = 14; y = 0; break;
    case 6: x = -34; y = 216; break;
    case 7: x = -34; y = 70; break;
    case 8: x = -34; y = -70; break;
    case 9: x = -34; y = 144; break;
    case 10: x = -34; y = 0; break;
    case 11: x = 45; y = -70; break;
    case 12: x = 45; y = 216; break;
    case 13: x = 45; y = 145; break;
    case 14: x = 45; y = 70; break;
    case 15: x = 45; y = 0; break;
    case 16: x = -70; y = -70; break;
    case 17: x = -70; y = 217; break;
    case 18: x = -70; y = -215; break;
    case 19: x = -70; y = 70; break;
    case 20: x = -70; y = 0; break;
  }
  console.log(numero);
  dado.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
}
 
botao.addEventListener('click', rolarDado);