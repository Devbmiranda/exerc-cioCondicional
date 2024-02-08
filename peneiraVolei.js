// Função para criar um jogador
function criarJogador(numero) {
    return {
        nome: `Jogador ${numero}`,
        numero: numero,
        // Adicione mais propriedades, se necessário
    };
}

// Lista de jogadores
let jogadores = [6];

// Cria os jogadores de 1 a 26
for (let i = 1; i <= 26; i++) {
    jogadores.push(criarJogador(i));
}

// Seleciona os jogadores pelos números fornecidos
let numerosSelecionados = [1, 3, 5, 7, 9, 11, 13, 15, 16, 18, 20, 22];
let jogadoresSelecionados = jogadores.filter(jogador => numerosSelecionados.includes(jogador.numero));

// Separa os jogadores em titulares e reservas
let titulares = jogadoresSelecionados.slice(0, 6);
let reservas = jogadoresSelecionados.slice(6);

// Função para imprimir os titulares e reservas
function imprimirTitularesEReservas(titulares, reservas) {
    console.log("Titulares:");
    console.log(titulares);

    console.log("\nReservas:");
    console.log(reservas);
}

// Imprime os resultados
imprimirTitularesEReservas(titulares, reservas);
