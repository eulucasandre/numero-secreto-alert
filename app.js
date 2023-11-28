alert('Boas vindas ao jogo do número secreto!');
let numMax = 100;
let numeroSecreto = parseInt(Math.random() * numMax);
console.log(`O numero secreto é ${numeroSecreto}.`);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao n.s
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numMax}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';