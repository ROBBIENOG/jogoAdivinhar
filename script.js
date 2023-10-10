

let attempts = 10;
let randomNumber;

 //Iniciando o Jogo
function startGame(){
     //Pegar número digitado pelo usuário
    const guess = document.getElementById("input_number").value;

    //Transformar o número em inteiro
    const guessValue = parseInt (guess);

        
    //Validar número se ele está entre 1 e 100,
    if(guessValue < 1 || guessValue > 100 || isNaN (guessValue)){    
        getElementById('result').innerHtml = "Você precisa digitar um número entre 1 e 100.";
        return;
    }

    // Sortear um número apenas quando o jogo começar
    if (attempts === 10) {
        randomNumber = Math.floor(Math.random() * 100) + 1; // Gerar um número entre 1 e 100
    }

    //Comparar os números se são iguais
    if (guessValue === randomNumber) {
        document.getElementById('result').innerHTML = "Parabéns! Você acertou o número!";
    } else if (guessValue < randomNumber) {
        document.getElementById('result').innerHTML = "Tente um número maior. Tentativas restantes: " + (attempts - 1);
    } else {
        document.getElementById('result').innerHTML = "Tente um número menor. Tentativas restantes: " + (attempts - 1);
    }

        attempts--;

    // Verificar se o jogador esgotou todas as tentativas
        
    if (attempts === 0) {
        document.getElementById('result').innerHTML = "Fim de jogo! O número era " + randomNumber + ". Clique em 'Iniciar Jogo' para jogar novamente.";
            
        document.getElementById("input_number").disabled = true; // Desativar a entrada após o fim do jogo

    }


    }
       
