function quadrado(){
    let divQuadrado = document.createElement("div");
    divQuadrado.classList.add("quadrado");
    return divQuadrado;
}

function linha(){
    let divLinha = document.createElement("div");
    divLinha.classList.add("linha")
    for(let i=1; i<=16; i++){
        let q = quadrado();
        divLinha.appendChild(q);
    }
    return divLinha;
}

function criandoTabuleiro() {
    let mapa = document.querySelector("#mapa");
    for(let i=1; i<=4; i++){
        let l = linha();
        mapa.appendChild(l);
    }
}

function mapearTabuleiro() {
    let fileiras = document.querySelectorAll(".linha")
    let colunas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"];

    let numero = 4;

    for (let fil of fileiras) {
        let letra = 0;
        for (let casas of fil.children) {
            casas.setAttribute("id", colunas[letra] + numero);
            if (letra == 15) {
                casas.classList.add("invisivel");
            }
            letra++;
        }
        numero--;
    }
}
