function movimentacaoCacto() {

    let intervaloMovimentoCacto = setInterval(() => {
        if(fimDeJogo) {
            clearInterval(intervaloMovimentoCacto);
            return;
        }
        let cactos = document.querySelectorAll(".cacto");
        cactos.forEach(function (cacto) {
            let letra = parseInt(cacto.parentElement.id.charCodeAt(0));
            let numero = parseInt(cacto.parentElement.id.charAt(1));
            let novaColuna = 0;
            let novaLinha = numero;
    
            if (letra === 97) {
                let cactoParent = cacto.parentElement;
                cactoParent.removeChild(cacto);
            } else {
                novaColuna = letra - 1;
                let novaCasa = document.getElementById(`${String.fromCharCode(novaColuna)}${novaLinha}`);
                let cactoParent = cacto.parentElement;
                cactoParent.removeChild(cacto);
                novaCasa.appendChild(cacto);
            };
        })
    }, 250)

}

function movimentacaoDinoAereo() {

    let intervaloMovimentoDinoAereo = setInterval(() => {
        if(fimDeJogo) {
            clearInterval(intervaloMovimentoDinoAereo);
            return;
        }
        let aereos = document.querySelectorAll(".aereo");
        aereos.forEach(function (aereo) {
            let letra = parseInt(aereo.parentElement.id.charCodeAt(0));
            let numero = parseInt(aereo.parentElement.id.charAt(1));
            let novaColuna = 0;
            let novaLinha = numero;
    
            if (aereo.classList.contains('dino-aereo-alto')) {
                aereo.classList.remove('dino-aereo-alto');
                aereo.classList.add('dino-aereo-baixo');
            } else if (aereo.classList.contains('dino-aereo-baixo')){
                aereo.classList.remove('dino-aereo-baixo');
                aereo.classList.add('dino-aereo-alto');
            }
    
            if (letra === 97) {
                let aereoParent = aereo.parentElement;
                aereoParent.removeChild(aereo);
            } else {
                novaColuna = letra - 1;
                let novaCasa = document.getElementById(`${String.fromCharCode(novaColuna)}${novaLinha}`);
                let aereoParent = aereo.parentElement;
                aereoParent.removeChild(aereo);
                novaCasa.appendChild(aereo);
            }
        })
    }, 350)

}
