var linhaDinoAereo = 3;
let geracaoMaxima = 4000;
let geracaoMinima = 3000;

function trocaLinha() {
    if (pontuacao > 1500) {
        if (linhaDinoAereo == 3) {
            return linhaDinoAereo = 1;
        } else {
            return linhaDinoAereo++;
        }
    } else {
        if (linhaDinoAereo == 3) {
            return linhaDinoAereo = 1;
        } else {
            return linhaDinoAereo = 3;
        }
    }
}

function divCacto() {
    let divCacto = document.createElement("div");
    divCacto.classList.add("inimigo");
    divCacto.classList.add("cacto");
    divCacto.classList.add("cacto-padrao");
    return divCacto;
}

function divCactoPequeno() {
    let divCacto = document.createElement("div");
    divCacto.classList.add("inimigo");
    divCacto.classList.add("cacto");
    divCacto.classList.add("cacto-pequeno-simples");
    return divCacto;
}

function dinossauroAereo() {
    let divDinoAereo = document.createElement("div");
    divDinoAereo.classList.add("inimigo");
    divDinoAereo.classList.add("aereo");
    divDinoAereo.classList.add("dino-aereo-alto");
    return divDinoAereo;
}


function cactosRandomizados() {
    let numero = Math.floor(Math.random() * (100 - 1) + 1);
    if (1 <= numero && numero <= 72) {
        return divCacto();
    }
    else {
        return divCactoPequeno();
    }
}

function geradorCactos() {
    let intervaloCactos = setInterval(() => {
        if (pontuacao > 400 && pontuacao < 1000) {
            geracaoMaxima = 3000;
            geracaoMinima = 2000;
        } else if (pontuacao > 1000 && pontuacao < 2000) {
            geracaoMaxima = 2000
            geracaoMinima = 1400;

        }
        let numero = numeroRandomizado(geracaoMaxima, geracaoMinima);
        let timeoutCactos = setTimeout(() => {
            let letra = 112;
            let cactoAtual = cactosRandomizados();
            let casa = document.getElementById(String.fromCharCode(letra) + "1");
            let casaCacto = casa.getElementsByClassName('cacto');
            if (casaCacto.length == 0) {
                casa.appendChild(cactoAtual);
            }
        }, numero);
        let intervaloVerificador = setInterval(() => {
            if (fimDeJogo) {
                clearInterval(intervaloVerificador);
                clearInterval(intervaloCactos);
                clearTimeout(timeoutCactos);
                geracaoMaxima = 4000;
                geracaoMinima = 3000;
                return;
            }
        }, 100)
    }, 2000);
}

function geradorDinoAereo() {

    let timeoutTempoInicial = setTimeout(() => {
        let timeoutDinoAero
        let intervaloDinoAereo = setInterval(() => {
            timeoutDinoAero = setTimeout(() => {
                let letra = 112;
                let aereo = dinossauroAereo();
                let casa = document.getElementById(String.fromCharCode(letra) + linhaDinoAereo);
                trocaLinha();
                let casaDinoAereo = casa.getElementsByClassName('aereo');
                if (casaDinoAereo.length == 0) {
                    casa.appendChild(aereo);
                }
            }, 5500)
        }, 5500)
        let intervaloVerificador = setInterval(() => {
            if (fimDeJogo) {
                clearInterval(intervaloVerificador);
                clearTimeout(timeoutTempoInicial);
                clearInterval(intervaloDinoAereo);
                clearTimeout(timeoutDinoAero);
            }
        }, 100)
    }, 10000);

}