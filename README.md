🎯 Jogo de Adivinhação - 7 Days of Code

Bem-vindo ao Jogo de Adivinhação! Este projeto faz parte do desafio #7DaysOfCode e tem como objetivo reforçar conceitos de estruturas condicionais e loops no JavaScript.

📌 Desafio

O jogo consiste em adivinhar um número secreto gerado aleatoriamente entre 0 e 10.

📜 Regras do jogo:

✅ O jogador tem 3 tentativas para acertar o número secreto.

✅ A cada erro, o jogo informa quantas tentativas restam.

✅ Se todas as tentativas forem esgotadas, o número secreto é revelado.

✅ O jogo impede entradas inválidas (como letras ou números fora do intervalo).

✅ O botão "Jogar" sempre inicia uma nova partida.


🖥️ Código Completo

📂 Estrutura do Projeto
📂 JogoAdivinhacao

 ├── 📄 index.html
 
 ├── 📄 index.js
 
 ├── 📄 README.md
 

📝 Código HTML (index.html)

Salve este código como index.html e abra no navegador para testar a interação! 👇

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo de Adivinhação</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f4f4f4; }
        h1 { color: #333; }
        #game-box { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); max-width: 400px; margin: auto; }
        button { padding: 10px; margin: 5px; font-size: 16px; cursor: pointer; border: none; border-radius: 5px; background-color: #3498db; color: white; }
        button:hover { background-color: #2980b9; }
        p { font-size: 18px; margin-top: 10px; }
    </style>
</head>
<body>
    <h1>🎯 Jogo de Adivinhação</h1>
    <p>Clique no botão abaixo para iniciar o jogo!</p>
    <button onclick="iniciarJogo()">Jogar</button>
    <script src="index.js"></script>
</body>
</html>
````


# Jogo de Adivinhação em JavaScript

Crie um arquivo `index.js` na mesma pasta e cole o seguinte código:

```javascript
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
````


🚀 Como Jogar

1️⃣ Clone o repositório: git clone https://github.com/brodyandre/JogoAdivinhacao.git

2️⃣ Abra o arquivo index.html no navegador.

3️⃣ Clique no botão "Jogar" e tente adivinhar o número secreto!


📌 Tecnologias Utilizadas

HTML → Estrutura da página

CSS → Estilos básicos

JavaScript → Lógica do jogo


🎯 Desafios Extras

✅ Implementado número secreto aleatório a cada nova partida.

✅ Mensagens na página para melhor interação do usuário.

✅ Validação de entrada, evitando erros ao digitar.

✅ Botão "Jogar" reinicia o jogo, sem precisar recarregar a página.


📢 Contribua!

💡 Se você tem ideias para melhorar o jogo, sinta-se à vontade para abrir um Pull Request ou criar uma Issue no repositório!

⭐ Se você gostou deste projeto, não esqueça de dar uma estrela no GitHub!


📌 Autor

👨‍💻 Desenvolvido por Luiz André

📌 GitHub: @brodyandre


🚀 Divirta-se jogando! 🎲
