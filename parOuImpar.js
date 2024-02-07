// Atribuindo um número escolhido pelo jogador 1 (você pode alterar conforme necessário)
let numeroJogador1 = 5;

// Atribuindo um número escolhido pelo jogador 2 (você pode alterar conforme necessário)
let numeroJogador2 = 7;

// Calculando a soma dos números escolhidos pelos jogadores
let soma = numeroJogador1 + numeroJogador2;

// Verificando se a soma é par ou ímpar
if (soma % 2 === 0) {
    console.log(`A soma ${soma} é par, portanto, o jogador 1 ganha!`);
} else {
    console.log(`A soma ${soma} é ímpar, portanto, o jogador 2 ganha!`);
}