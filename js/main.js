let intervalPulo;
let verificador = true;
let tempo = 0;
let teclasPermitidas = [' ', 'ArrowUp', 'w'];
let fimDeJogo = false;

function inicializarMapa() {
    criandoTabuleiro();
    mapearTabuleiro();
    posicaoInicial();
    criarChaoInicial();
    criandoNuvens();
}

function iniciarJogo() {
    esconderBotoes();
    geradorCactos();
    geradorDinoAereo();
    movimentacaoCacto();
    movimentacaoDinoAereo();
    geradorChao();
    movimentacaoNuvem();
    movimentacaoChao();
    let dino = document.querySelector('.dino');
    colisao(dino);
    movimentacaoDino();
    iniciarCronometro();
    maiorPontuacao();
}

function reiniciarJogo() {
    if (fimDeJogo) {
        let adversarios = document.querySelectorAll(".inimigo");
        adversarios.forEach((inimigo) => {
            inimigo.remove();
        })
        let linhas = document.querySelectorAll(".linha");
        linhas.forEach((linha) => {
            linha.remove();
        })
        inicializarMapa();
        iniciarJogo();
        fimDeJogo = false;
        pontuacao = 0;
    }
}

document.addEventListener('keydown', function (event) {
    if (teclasPermitidas.includes(event.key)) {
        if (verificador) {
            intervalPulo = setInterval(() => {
                tempo++;
                if (tempo > 20) {
                    puloDino(tempo);
                }
            }, 10)
            verificador = false
        }
    }
});

document.addEventListener('keyup', function (event) {
    if (teclasPermitidas.includes(event.key)) {
        if (tempo <= 20) {
            puloDino(tempo);
        }
        clearInterval(intervalPulo)
        tempo = 0;
        verificador = true
    }
});

document.addEventListener('touchstart', function (event) {
    if (verificador) {
        intervalPulo = setInterval(() => {
            tempo++;
            if (tempo > 20) {
                puloDino(tempo);
            }
        }, 10)
        verificador = false
    }
});

document.addEventListener('touchend', function (event) {
    if (tempo <= 20) {
        puloDino(tempo);
    }
    clearInterval(intervalPulo)
    tempo = 0;
    verificador = true
});


inicializarMapa();
maiorPontuacao();
eventoNosBotoes();
tabelaDeLideranca();