var pulo = false;

function criarDino() {
    let divDino = document.createElement("div");
    divDino.classList.add("dino");
    divDino.classList.add("dino-pulo");
    return divDino;
}

function posicaoInicial() {
    let dino = criarDino();
    let casaInicial = document.querySelector("#b1");
    casaInicial.appendChild(dino);
}

function puloDino(tempoPressionado) {
    if(fimDeJogo) {
        return;
    }
    pulo = true;
    let linha;
    let dino = document.querySelector(".dino");
    if (dino.parentElement.id !== 'b1') {
        return;
    }
    let letra = dino.parentElement.id.charAt(0);
    let numero = parseInt(dino.parentElement.id.charAt(1));

    let som = document.getElementById('som_pulo');
    som.play();
    
    if (tempoPressionado <= 20) {
        linha = numero + 1;
        setTimeout(() => {
            mudarCasa(letra, linha, dino);
        }, 100);

        setTimeout(() => {
            mudarCasa(letra, numero, dino);
            pulo = false;
        }, 500);
    } else {
        for (let i = 1; i <= 2; i++) {
            if (i == 1) {
                let linha = numero + 1;
                setTimeout(() => {
                    mudarCasa(letra, linha, dino);
                }, 50);
            } else {
                let linha = numero + 2;
                setTimeout(() => {
                    mudarCasa(letra, linha, dino);
                }, 250);
            }
        }

        for (let i = 1; i <= 2; i++) {
            if (i == 1) {
                let linha = numero + 1
                setTimeout(() => {
                    mudarCasa(letra, linha, dino);
                }, 500);
            } else {
                let linha = numero
                setTimeout(() => {
                    mudarCasa(letra, linha, dino);
                    pulo = false;
                }, 700);
            }
        }
    }
}

function mudarCasa(letra, linha, dino) {
    if(fimDeJogo) {
        return;
    }
    let novoQuadrado = document.getElementById(`${letra}${linha}`);
    let quadradoAtual = dino.parentElement;
    quadradoAtual.removeChild(dino);
    novoQuadrado.appendChild(dino);
}

function movimentacaoDino() {
    let dino = document.querySelector(".dino");
    intervaloMovimentoDino = setInterval(() => {
        if(fimDeJogo) {
            clearInterval(intervaloMovimentoDino);
            if(dino.classList.contains('dino-pe-direito')){
                dino.classList.remove('dino-pe-direito');
                dino.classList.add('dino-morto');
            } else if (dino.classList.contains('dino-pe-esquerdo')) {
                dino.classList.remove('dino-pe-esquerdo');
                dino.classList.add('dino-morto');
            } else if(dino.classList.contains('dino-pulo')) {
                dino.classList.remove('dino-pulo');
                dino.classList.add('dino-morto');
            }
            return;
        }
        
        if (pulo) {
            if (dino.classList.contains('dino-pe-direito')) {
                dino.classList.remove('dino-pe-direito');
                dino.classList.add('dino-pulo');
            } else if (dino.classList.contains('dino-pe-esquerdo')) {
                dino.classList.remove('dino-pe-esquerdo');
                dino.classList.add('dino-pulo');
            }
        } else {
            if(dino.classList.contains('dino-pulo')){
                dino.classList.remove('dino-pulo');
                dino.classList.add('dino-pe-direito');
            } else {
                if (dino.classList.contains('dino-pe-direito')) {
                    dino.classList.remove('dino-pe-direito');
                    dino.classList.add('dino-pe-esquerdo');
                } else if (dino.classList.contains('dino-pe-esquerdo')) {
                    dino.classList.remove('dino-pe-esquerdo');
                    dino.classList.add('dino-pe-direito');
                }
            }
        }
    }, 150)
}