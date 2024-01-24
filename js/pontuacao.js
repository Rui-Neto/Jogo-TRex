let pontuacao = 0;
let nome = '';
let placar;
let maiorValor;
let classificao = JSON.parse(localStorage.getItem("classificacao")) || [];

function iniciarCronometro() {
    placar = setInterval(() => {
        if(fimDeJogo) {
            clearInterval(placar);
            salvarLocalStorage(pontuacao) 
            return;
        }
        pontuacao++;
        document.getElementById('placar').innerText = pontuacao.toString().padStart(5, '0');
    }, 50);
}

function maiorPontuacao(){
    if(classificao.length != 0){
        maiorValor = classificao
            .reduce((max, obj) => 
            (parseInt(obj.pontuacao) > max ? parseInt(obj.pontuacao) : max), classificao[0].pontuacao);
    } else {
        maiorValor = 0;
    } 
        document.querySelector(".maior__pontuacao").innerText = `HS: ${maiorValor.toString().padStart(5, '0')}`
}

function salvarLocalStorage(pontuacao) {
    const inputElement = document.getElementById('input__nick');
    const regexNome = /^[^\s]+$/;

    if(inputElement.value != '' && regexNome.test(inputElement.value)) {
        const jogador = {
            "nome": inputElement.value.toUpperCase(),
            "pontuacao": pontuacao
        }
        jogador.id = classificao[classificao.length - 1] ? (classificao[classificao.length - 1]).id + 1 : 0;
        classificao.push(jogador);
        classificao.sort((a, b) => b.pontuacao - a.pontuacao);
        if(classificao.length > 25) {
            classificao = classificao.slice(0, 25);
        }
        localStorage.setItem("classificacao", JSON.stringify(classificao));
        tabelaDeLideranca();
        maiorPontuacao();
    }
}

function limparLocalStorage() {
    localStorage.clear();
    classificao = JSON.parse(localStorage.getItem("classificacao")) || [];
    tabelaDeLideranca();
    maiorPontuacao();
}