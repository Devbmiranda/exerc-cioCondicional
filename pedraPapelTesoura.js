// Atribuindo um valor aleatório entre 0 e 2 para representar Pedra, Papel ou Tesoura para o jogador 1
let escolhaJogador1 = Math.floor(Math.random() * 3);

// Definindo as opções
let PEDRA = 0;
let PAPEL = 1;
let TESOURA = 2;

// Atribuindo um valor inicial para a escolha do jogador 1 (você pode alterar conforme necessário)
let escolhaInicialJogador1 = PAPEL;

// Exemplo de uso para o jogador 1
if (escolhaInicialJogador1 === PEDRA) {
    console.log("Jogador 1 escolheu Pedra");
} else if (escolhaInicialJogador1 === PAPEL) {
    console.log("Jogador 1 escolheu Papel");
} else if (escolhaInicialJogador1 === TESOURA) {
    console.log("Jogador 1 escolheu Tesoura");
}

// Atribuindo um valor aleatório entre 0 e 2 para representar Pedra, Papel ou Tesoura para o jogador 2
let escolhaJogador2 = Math.floor(Math.random() * 3);

// Exemplo de uso para o jogador 2
if (escolhaJogador2 === PEDRA) {
    console.log("Jogador 2 escolheu Pedra");
} else if (escolhaJogador2 === PAPEL) {
    console.log("Jogador 2 escolheu Papel");
} else if (escolhaJogador2 === TESOURA) {
    console.log("Jogador 2 escolheu Tesoura");
}

// Lógica para determinar o vencedor
if (
    (escolhaInicialJogador1 === PEDRA && escolhaJogador2 === TESOURA) ||
    (escolhaInicialJogador1 === PAPEL && escolhaJogador2 === PEDRA) ||
    (escolhaInicialJogador1 === TESOURA && escolhaJogador2 === PAPEL)
) {
    console.log("Jogador 1 ganha!");
} else if (
    (escolhaJogador2 === PEDRA && escolhaInicialJogador1 === TESOURA) ||
    (escolhaJogador2 === PAPEL && escolhaInicialJogador1 === PEDRA) ||
    (escolhaJogador2 === TESOURA && escolhaInicialJogador1 === PAPEL)
) {
    console.log("Jogador 2 ganha!");
} else {
    console.log("Empate!");
}