function esconderBotoes() {
    let botaoIniciar = document.getElementById('iniciar');
    let botaoReiniciar = document.getElementById('reiniciar');

    if (!botaoIniciar.classList.contains('invisivel')) {
        botaoIniciar.classList.add('invisivel');
    }
    if (!botaoReiniciar.classList.contains('invisivel')) {
        botaoReiniciar.classList.add('invisivel');
    }
}

function aparecerBotoesGameover() {
    let botaoReiniciar = document.getElementById('reiniciar');
    if (botaoReiniciar.classList.contains('invisivel')) {
        botaoReiniciar.classList.remove('invisivel');
    }
}

function travaTab(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
    }
}

function eventoNosBotoes() {
    let botaoIniciar = document.getElementById("iniciar");
    botaoIniciar.addEventListener('click', iniciarJogo);
    
    let botaoReiniciar = document.getElementById('reiniciar');
    botaoReiniciar.addEventListener('click', reiniciarJogo);
    
    const abrirModalBtn = document.getElementById('classificacaoModalBtn');
    const fecharModalBtn = document.getElementById('fecharModalBtn');
    const modal = document.getElementById('classificacao');
    
    function fechaModalEsc(e) {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    };
    
    abrirModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.addEventListener('keydown', travaTab);
        document.addEventListener('keydown', fechaModalEsc);
    });
    
    fecharModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.removeEventListener('keydown', travaTab);
        document.removeEventListener('keydown', fechaModalEsc);
    });

    document.removeEventListener('keydown', fechaModalEsc);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.removeEventListener('keydown', travaTab);
        }
    });

    const zerarClassificacao = document.getElementById('zerarClassificacao');
    zerarClassificacao.addEventListener('click', limparLocalStorage);

}
