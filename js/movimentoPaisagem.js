function movimentacaoNuvem() {

    let intervaloMovimentoNuvem = setInterval(() => {
        if(fimDeJogo) {
            clearInterval(intervaloMovimentoNuvem);
            return;
        }
        let nuvens = document.querySelectorAll(".nuvem");
        nuvens.forEach(function (nuvem) {
            let letra = parseInt(nuvem.parentElement.id.charCodeAt(0));
            let numero = parseInt(nuvem.parentElement.id.charAt(1));
            let novaColuna = 0;
            let novaLinha = numero;
    
            if (letra === 97) {
                novaColuna = 112;
            } else {
                novaColuna = letra - 1;
            }
    
            let novaCasa = document.getElementById(`${String.fromCharCode(novaColuna)}${novaLinha}`);
            let nuvemParent = nuvem.parentElement;
            nuvemParent.removeChild(nuvem);
            novaCasa.appendChild(nuvem);
        })
    }, 2367)

}

function movimentacaoChao() {

    let intervaloMovimentoChao = setInterval(() => {
        if(fimDeJogo) {
            clearInterval(intervaloMovimentoChao);
            return;
        }
        let chaos = document.querySelectorAll(".chao");
        chaos.forEach(function (chao) {
            let letra = parseInt(chao.parentElement.id.charCodeAt(0));
            let numero = parseInt(chao.parentElement.id.charAt(1));
            let novaColuna = 0;
            let novaLinha = numero;
        
            if (letra === 97) {
                let chaoParent = chao.parentElement;
                chaoParent.removeChild(chao);
            } else {
                novaColuna = letra - 1;
                let novaCasa = document.getElementById(`${String.fromCharCode(novaColuna)}${novaLinha}`);
                let chaoParent = chao.parentElement;
                chaoParent.removeChild(chao);
                novaCasa.appendChild(chao);
            } ;
        })
    },250)

}