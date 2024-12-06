// dados
const dado = document.getElementById('dado');

let boneco = 0;
let boneco2 = 0;
let boneco3 = 0;
let boneco4 = 0;


dado.addEventListener("click", function() {
    let valor = Math.floor(Math.random() * 6) + 1;
    dado.innerText = valor;

    boneco = boneco + valor;
    boneco2 = boneco2 + valor;
    boneco3 = boneco3 + valor;
    boneco4 = boneco4 + valor;
    
    for (let index = 0; index < 51; index++) {
        document.getElementById(index).classList.remove("marcaBoneco");
        document.getElementById(index).classList.remove("marcaBoneco2");
        document.getElementById(index).classList.remove("marcaBoneco3");
        document.getElementById(index).classList.remove("marcaBoneco4");
    }

    let casa = document.getElementById(boneco);
    casa.classList.add("marcaBoneco");

});



