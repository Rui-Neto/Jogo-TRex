function divChao() {
    let divChao = document.createElement("div");
    divChao.classList.add("chao");
    divChao.classList.add("chao-padrao");
    return divChao;
}

function divChaoBuraco() {
    let divChao = document.createElement("div");
    divChao.classList.add("chao");
    divChao.classList.add("chao-buraco");
    return divChao;
}

function divChaoMorrinho() {
    let divChao = document.createElement("div");
    divChao.classList.add("chao");
    divChao.classList.add("chao-morrinho");
    return divChao;
}


function chaoRandomizado() {
    let numero = Math.floor(Math.random() * (100 - 1) + 1);
    if (1 <= numero && numero <= 72) {
        return divChao();
    }
    else if (numero <= 88) {
        return divChaoBuraco();
    }
    else {
        return divChaoMorrinho();
    }
} 

function criarChaoInicial(){
    let letra = 112
    for(let i=1; i<=16; i++){
        let chao = divChao();
        if( i == 4 || i == 8 || i == 15) {
            chao = divChaoBuraco();
        } else if (i == 2 || i == 12 || i == 9 ) {
            chao = divChaoMorrinho();
        }
        let casa = document.getElementById(String.fromCharCode(letra) + "1");
        casa.appendChild(chao);
        letra--;
    }
}

function geradorChao() {
    
    let intervaloGeradorChao = setInterval(() => {
        let letra = 112;
        let chaoAtual = chaoRandomizado();
        let casa = document.getElementById(String.fromCharCode(letra) + "1");
        let casaChao = casa.getElementsByClassName('chao');
        if (casaChao.length == 0) {
            casa.appendChild(chaoAtual);
        }
        if (fimDeJogo){
            clearInterval(intervaloGeradorChao);
        }
    }, 250)

}

function divNuvem() {
    let divNuvem = document.createElement("div");
    divNuvem.classList.add("nuvem");
    return divNuvem;
}

function criandoNuvens() {
    let letra = 112
    for (let i = 1; i <= 16; i++) {
        let nuvem = divNuvem();
        if (i % 4 == 0) {
            let casa = document.getElementById(String.fromCharCode(letra) + "4");
            casa.appendChild(nuvem);
        } else if (i % 7 == 0) {
            let casa = document.getElementById(String.fromCharCode(letra) + "3");
            casa.appendChild(nuvem);
        }
        letra--;
    }
}