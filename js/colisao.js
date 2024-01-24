function colisao(dino) {
    let colidiu = setInterval(() => {
        let dinoBlocoId = dino.parentElement.id;
        let adversarios = document.querySelectorAll(".inimigo");
        let som = document.getElementById('som_morte');

        adversarios.forEach(function (inimigo) {
            let inimigoBlocoId = inimigo.parentElement.id;

            if (dinoBlocoId === inimigoBlocoId) {
                som.play();
                clearInterval(colidiu);
                fimDeJogo = true;
                aparecerBotoesGameover();
            }
        });
    }, 50);
}