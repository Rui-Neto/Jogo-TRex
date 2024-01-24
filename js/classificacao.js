function tabelaDeLideranca() {
    let ol = document.querySelector('.lista');
    ol.textContent = '';
    for (let i = 0; i < 10; i++) {
        try {
            let jogador = classificao[i];
            let li = document.createElement('li');
            li.innerHTML = `<p class="item__lista">Nome: ${jogador.nome} <span class="score">Score: ${jogador.pontuacao.toString().padStart(5, '0')}</span></p>\n`;
            ol.appendChild(li);
        } catch (e) {
            return;
        }
    }
}