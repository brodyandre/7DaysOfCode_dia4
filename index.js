function iniciarJogo() {
    let numeroSecreto = Math.floor(Math.random() * 11); // Gera um número entre 0 e 10
    let tentativas = 3;
    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "Tente adivinhar um número entre 0 e 10!";

    while (tentativas > 0) {
        let chute = prompt(`Você tem ${tentativas} tentativa(s). Qual é o seu palpite?`);

        if (chute === null) {
            mensagem.innerHTML = "Jogo cancelado!";
            return; // Sai da função caso o jogador cancele o prompt
        }

        chute = Number(chute);

        if (isNaN(chute) || chute < 0 || chute > 10) {
            alert("Por favor, digite um número válido entre 0 e 10.");
            continue; // Pede um novo número sem reduzir tentativas
        }

        if (chute === numeroSecreto) {
            mensagem.innerHTML = `🎉 Parabéns! Você acertou! O número era ${numeroSecreto}.`;
            return; // Sai do jogo ao acertar
        } else {
            tentativas--;
            alert(`Errado! Você ainda tem ${tentativas} tentativa(s).`);
        }
    }

    // Se todas as tentativas acabarem, revela o número correto
    mensagem.innerHTML = `😞 Você perdeu! O número era ${numeroSecreto}. Tente novamente!`;
}
